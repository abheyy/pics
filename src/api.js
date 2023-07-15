import axios from "axios";

const searchImages= async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
    header: {
        Authorization: 'Client-ID YqyHxs4wos6Vd9_C-MJwubwJWqpYMba-rBuchZxCgOI'
    },
    params: {
        query:term
    }
})

return response.data.results;
};

export default searchImages;