import { API } from '../config'
import axios from 'axios';
export const NewBooking = (booking, token, propid) => {
    return axios.post(`https://backend.thevlage.com/api/client/property/${propid}/bookings`,
        booking,
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
export const payBooking = (data) => {
    return axios.post(`https://backend.thevlage.com/api/payments`,
        data,
    )
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
export const ApproveBooking = (bookingid, token) => {
    return axios.put(`https://backend.thevlage.com/api/bookings/${bookingid}/confirm`,
        {},
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
export const DeleteBooking = (bookingid, token) => {
    return axios.delete(`https://backend.thevlage.com/api/client/bookings/${bookingid}`,
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
export const RestoreBooking = (bookingid, token) => {
    return axios.put(`https://backend.thevlage.com/api/client/bookings/restore/${bookingid}`,
        {},
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

