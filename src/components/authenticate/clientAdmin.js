import React, { useEffect } from "react";
import Router from 'next/router'
import { IsAuth } from "../../../actions/Auth";

const CAdmin = ({ children }) => {
    useEffect(() => {
        if (!IsAuth() || !IsAuth().roles.includes('client')) {
            Router.push(`/login`)

        }

    }, [])
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
export default CAdmin