import axios from "axios";



const API_KEY = '24091135-1820e90e2190aaee7366cf9cd';
const URL = 'https://pixabay.com/api/' ;


export const getImages = (text, count) => {
    try{
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error);
    }

}