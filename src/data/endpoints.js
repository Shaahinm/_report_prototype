// import axios from "axios";

// const base = "http://3.18.47.220:8000/api/"
const base = "/api/"

export const GET_TRADES_REPORT = "reports";
export const GET_DETAIL_TRADES = "reports";

// export const prepareHeaders = () => {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`    
//     axios.defaults.headers.post['Content-Type'] = 'application/json'
// }

export const createUrlFor = (url) => {
    return `${base}${url}`
}