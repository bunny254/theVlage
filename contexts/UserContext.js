import React from "react";
let user = {
    email: "test@email.com",
    first_name: "John",
    gender: "Male",
    id: "-",
    id_number: null,
    id_type: null,
    is_verified: true,
    last_name: "Unknown",
    phone_number: "1111111116",
    roles: ["client"],
    surname: "Doe"
}
export default React.createContext(user);