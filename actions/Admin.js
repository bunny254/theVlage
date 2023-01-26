import { API } from "../config"
import axios from "axios";


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
export const ApproveListing = (token, propid) => {
    return axios.put(`${API}/admin/property/${propid}/approve`,
        {},
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
export const RevokeUser = (token, userid) => {
    return axios.put(`${API}/admin/user/${userid}/revoke_roles`,
        {},
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
export const UpdateRoles = (token, userid, role) => {
    return axios.put(`${API}/admin/user/${userid}/update_roles`,
        role,
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

}

export const TransferListing = (token, propertyid, transid) => {
    return axios.put(`${API}/admin/property/${propertyid}/transfer`,
        transid,
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

}