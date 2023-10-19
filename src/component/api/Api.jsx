import axios from "axios";

const url = "https://api.themoviedb.org/3";
const apikey = "eec0249481e4d3501e2aeb7e36dfcf6b";

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

const fetchApiData = (param) => {
    return axios.get(`${url}${endpoints[param]}?api_key=${apikey}`);
};

export default fetchApiData;
