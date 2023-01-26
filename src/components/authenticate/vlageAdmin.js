import React, { useEffect } from "react";
import Router from 'next/router'
import { IsAuth } from "../../../actions/Auth";

const Admin = ({ children }) => {
    useEffect(() => {
        if (!IsAuth() || !IsAuth().roles.includes('admin')) {
            Router.push(`/login`)

        }

    }, [])
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
export default Admin