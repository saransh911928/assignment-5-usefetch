import express from 'express';
import { connectToDB } from './config/db.js';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';``

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Saransh Beohar you are amazing and lucky, love you!');
});

app.post('/api/signup', async (req, res) => {
    // Implementation for signup
    const { username, email, password } = req.body;
    // Here you would typically hash the password and save the user to the database
    
   try{  
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
        return res
        .status(400)
        .json({ message: 'Username is taken, please choose another' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userDoc = await User.create({
        username,
        email,
        password: hashedPassword
    });

    await userDoc.save();

    // JWT

    if (userDoc) {
        // Generate JWT token
        // jwt.sign(payload, secret, options)
        const token = jwt.sign(
            { Id: userDoc._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

    }

    return res.status(201).json({ user: userDoc, message: 'User created successfully' });
   } catch (error) {
        
    res.status(400).json({ message: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    // Implementation for login
    const { email, username, password } = req.body;

    try{
       const userDoc = await User.findOne(email ? { email } : { username });

       if (!userDoc) {
        return res.status(400).json({ message: 'Invalid credentials.'});
       }

         const isPasswordValid = await bcrypt.compareSync(
            password,
            userDoc.password
        );
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });        
        }

        //JWT
        if (userDoc) {
        // Generate JWT token
        // jwt.sign(payload, secret, options)
        const token = jwt.sign(
            { Id: userDoc._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

    }

    return res.status(201).json({ user: userDoc, message: 'Logged in successfully' });

    } catch (error) {
        console.error("Error occurred while logging in:", error.message);
        res.status(400).json({ message: error.message });
    }

});

app.get('/api/fetch-user', async (req, res) => {
    // Implementation for fetching user data
    const {token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: 'Invalid token.' });
        }
        const userDoc = await User.findById(decoded.Id).select('-password');
        if (!userDoc) {
            return res.status(401).json({ message: 'No user found.' });
        }
        res.status(200).json({ user: userDoc });
    } catch (error) {
        res.status(401).json({ message: 'Error in fetching user: ' + error.message });
        return res.status(401).json({ message: 'error.message'});

    }
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
});

connectToDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch(() => {
        process.exit(1);
    });
