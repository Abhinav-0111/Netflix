import ContextApi from "./ContextApi";
import React, { useState } from "react";

function ContextState(props) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const emailOnChangeHandler = (e) => {
        setemail(e.target.value);
    };
    const passwordOnChangeHandler = (e) => {
        setpassword(e.target.value);
    };
    return (
        <>
            <ContextApi.Provider
                value={{
                    emailOnChangeHandler,
                    passwordOnChangeHandler,
                    email,
                    setemail,
                    password,
                    setpassword,
                }}
            >
                {props.children}
            </ContextApi.Provider>
        </>
    );
}

export default ContextState;
