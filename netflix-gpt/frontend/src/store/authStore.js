import {create} from 'zustand';
import axios from 'axios';

axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

const API_URL = 'http://localhost:5000/api'; // Base URL for the backend API

export const useAuthStore = create((set) => ({
    // Initial state
    user: null,
    isLoading: false,
    error: null,
    message: null,
    fetchingUser: true,

    // functions to update the state
    
    signup: async (username, email, password) => {
        set({isLoading: true, message: null});

        try{
            const response = await axios.post(`${API_URL}/signup`, {
                username,
                email,
                password
            });
            set({user: response.data, isLoading: false});
        } catch (error) {
            set({error: error.response.data.message || "Error Signing Up", isLoading: false});

            throw error;
        }
    },

    login: async (username, password) => {
        set({isLoading: true, message: null, error: null});

        try{
            const response = await axios.post(`${API_URL}/login`, {
                username,
                password
            });
            
            const { user, message} = response.data;

            set({
                user,
                message,
                isLoading: false
            });
            return { user, message };   
        } catch (error) {
            set({
                error: error.response.data.message || "Error Logging In", 
                isLoading: false
            });
            throw error;
        }
    },

    fetchUser: async () => {

        set({fetchingUser: true, error: null});

        try{
            const response = await axios.get(`${API_URL}/fetch-user`);
            set({user: response.data.user, fetchingUser: false});

        }catch (error) {
            set({
                error: error.response.data.message || "Error Fetching User", 
                fetchingUser: false,
                user: null,
            });

            throw error;
        }
    },

    logout: async () => {
        set({isLoading: true, error: null, message: null});

        try{
            await axios.post(`${API_URL}/logout`);
            const { message } = response.data;
            set({
                user: null,
                message: message,
                isLoading: false,
                error: null
            });

            return {message};

        } catch (error) {
            set({
                error: error.response.data.message || "Error Logging Out", 
                isLoading: false,
            });
            throw error;
        }
    }

}));