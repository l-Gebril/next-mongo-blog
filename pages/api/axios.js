import axios from 'axios';
if(typeof window !== "undefined") {
    axios.defaults.baseURL = `${window.location.origin}/api`;
} else axios.defaults.baseURL = 'https://basic-travel-blog.vercel.app/api';

axios.defaults.headers.post['Content-Type'] = 'application/json';