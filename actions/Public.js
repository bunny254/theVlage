import { API } from "../config"
import axios from "axios";

export default axios.create({
    baseURL: API,
    // headers: {
    //     Authorization: 'Client-ID OpEkH-8UgTDvjcZ34Xw6GvMu78xzSCR8aRASSUmQJsY'
    // }
});
