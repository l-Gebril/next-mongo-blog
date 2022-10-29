import axios from 'axios';
if(typeof window !== "undefined") {
    axios.defaults.baseURL = `${window.location.origin}/api`;
} else axios.defaults.baseURL = 'basic-travel-blog-5t26z1ud4-l-gebril.vercel.app/api';

axios.defaults.headers.post['Content-Type'] = 'application/json';