import { API } from '../config'
import axios from 'axios';
export const CreateListing = (listing, token) => {
    return axios.post(`https://backend.thevlage.com/api/properties`,
        listing,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(
            response => {
                // console.log(response);
                return response
            }
        )
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                console.log(err.message);
                console.log(err.status);
                return err
            } else if (err.request) {
                // client never received a response, or request never left
                // console.log('weuh');
                return err
            } else {
                // anything else
                console.log('wrong');
            }
        })
};

export const UploadListingPics = (pics, token, propid) => {
    return axios.post(`${API}/property/${propid}/image_upload`,
        pics,
        {
            headers: {

                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response
        })
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                console.log(err.message);
                return err
            } else if (err.request) {
                // client never received a response, or request never left
                console.log('weuh');
                return err
            } else {
                // anything else
                console.log('wrong');
            }
        })
};


export const GetListings = (token) => {
    return axios.get(`${API}/properties`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(
            response => {
                return response
            }
        )
        .catch(err => console.log(err));
};
export const TrashListings = (token, id) => {
    return axios.delete(`${API}/properties/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(
            response => {
                return response
            }
        )
        .catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)

                return err
            } else if (err.request) {
                // client never received a response, or request never left
                console.log('weuh');
                return err
            } else {
                // anything else
                return err

            }
        });
};
export const ViewProperties = () => {
    return axios.get(`${API}/pub/properties`,)
        .then(
            response => {
                return response
            }
        )
        .catch(err => console.log(err));

}