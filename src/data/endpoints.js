//import axios from "axios";

// const base = "http://3.18.47.220:8000/api/"
const base = "http://localhost:8998/dC/api/"

export const GET_REPORTS = "report/getTrades";

// export const prepareHeaders = () => {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`    
//     axios.defaults.headers.post['Content-Type'] = 'application/json'
// }

export const createUrlFor = (url) => {
    return `${base}${url}`
}