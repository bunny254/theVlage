import { API } from "../config"
import axios from "axios";
import cookie from "js-cookie"
export const Signup = user => {
    return axios.post(`${API}/register`,
        user,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
export const VerificationCode = (code, token) => {
    return axios.post(`${API}/verify`,
        code,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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

export const ResendVerificationCode = (user, token) => {
    return axios.post(`${API}/resend_otp`,
        user,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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

export const Signin = user => {
    return axios.post(`${API}/login`,
        user,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
}

export const Reset = user => {
    return axios.post(`${API}/password/reset`, user)
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
                return err
            }
        })
}

export const UpdatePassword = (passData, token) => {
    return axios.post(`${API}/password/update`,
        passData,
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
                return err
            }
        })


}

export const Signout = () => next => {
    removeCookie('token')
    removeLocalStorage('user')
    next()


}

//set cookie
export const SetCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 0.5
        })
    }
}

export const RemoveCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 0.5
        })
    }
}
//get cookie
export const GetCookie = (key) => {
    if (process.browser) {
        return cookie.get(key)
    }
}

//local storage
export const SetLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
export const RemoveLocalStorage = (key) => {
    if (process.browser) {
        localStorage.removeItem(key)
    }
}

//authenticate user by passing data to cookie and local storage
export const Authenticate = (data, next) => {
    SetCookie('token', data.token)
    SetLocalStorage('token', data.token)
    SetLocalStorage('user', data.user)
    SetCookie('user', JSON.stringify(data.user))
    next();
}

export const IsAuth = () => {
    if (process.browser) {
        const cookieChecked = GetCookie('token')
        const userChecked = localStorage.getItem('user')
        const tokenChecked = localStorage.getItem('token')
        if (cookieChecked && cookieChecked !== "undefined") {
            if (tokenChecked && tokenChecked !== "undefined") {
                if (userChecked && userChecked !== "undefined") {
                    return JSON.parse(localStorage.getItem('user'))
                }
                else {
                    return false;
                }
            }

        }
        else {
            return false
        }
    }
}