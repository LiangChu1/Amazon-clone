import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-clone-49d41.cloudfunctions.net/api' 
    //'http://localhost:5001/clone-49d41/us-central1/api' //API (cloud function) URL
})

export default instance;