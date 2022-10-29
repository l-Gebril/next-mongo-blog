import axios from 'axios';
if(typeof window !== "undefined") {
    axios.defaults.baseURL = `${window.location.origin}/api`;
}
axios.defaults.headers.post['Content-Type'] = 'application/json';