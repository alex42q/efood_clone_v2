import axios from "axios";

const URL = "http://localhost:5000"

export const GetFourOffersIndex = () =>{
    return axios.get(`${URL}/api/v1/companies/index`);
}

export const GetAllCategories = () =>{
    return axios.get(`${URL}/api/v1/categories`)
}

export const GetRecomendedCompanies = () =>{
    return axios.get(`${URL}/api/v1/recomended`)
}

export const GetAllCompanies = () =>{
    return axios.get(`${URL}/api/v1/shops`)
}

export const GetOneStore = (slug) =>{
    return axios.get(`${URL}/api/v1/store/${slug}`);
}