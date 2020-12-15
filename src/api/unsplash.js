import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID cmlLK1zH6rK30d-mQWmlfKWiJFisEtSEze1RpqUdtMY",
      }
});