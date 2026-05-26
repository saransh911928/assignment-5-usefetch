import { webcrypto } from "node:crypto";
import mongoose from "mongoose";

// Node 16 doesn't expose Web Crypto globally, but newer MongoDB drivers expect it.
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}

export async function connectToDB() {
    try {
        console.log("Connecting to MongoDB...");
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });
        console.log("Connected to MongoDB:", conn.connection.host);
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
};
