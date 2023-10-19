import React, { useContext, useEffect, useState } from "react";
import ContextApi from "./context/ContextApi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
    const {
        emailOnChangeHandler,
        passwordOnChangeHandler,
        email,
        setemail,
        setpassword,
        password,
    } = useContext(ContextApi);
    const app = initializeApp(firebaseConfig);
    const location = useLocation();
    const text = location.pathname === "/login" ? true : false;
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, setuser] = useState(false);
    const [emailused, setemailused] = useState(false);
    const [emailvaild, setemailvaild] = useState(true);
    const [passwordvaild, setpasswordvaild] = useState(true);

    const validation = (fieldName, value) => {
        switch (fieldName) {
            case "email":
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            case "password":
                return value.length >= 6;
            default:
                break;
        }
    };

    const ctaclickhandler = (e) => {
        e.preventDefault();
        if (!validation("email", email) || !validation("password", password)) {
            setemailvaild(validation("email", email));
            setpasswordvaild(validation("password", password));
            return;
        }
        if (text) {
            signInWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    setuser(true);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    setemailused(true);
                });
        }
        setemail("");
        setpassword("");
    };

    useEffect(() => {
        setemailused(false);
        setuser(false);
    }, [location]);
    return (
        <div className="main">
            <div className="login_card">
                <form>
                    <h1>{text ? "Sign In" : "Register"}</h1>
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={emailOnChangeHandler}
                        autoFocus
                    />
                    {!emailvaild && (
                        <p className="text-danger">Email is invalid/blank</p>
                    )}
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={passwordOnChangeHandler}
                    />
                    {!passwordvaild && (
                        <p className="text-danger">Password is invalid/blank</p>
                    )}
                    <button onClick={ctaclickhandler}>
                        {text ? "Sign In" : "Sign Up"}
                    </button>
                    {user && (
                        <p className="text-danger">
                            User not found | Create your account
                        </p>
                    )}
                    {emailused && (
                        <p className="text-danger">
                            Email Already In Use | Go to Sign In
                        </p>
                    )}
                    <h4>
                        {text ? "New to Netflix." : "Existing User."}{" "}
                        <Link to={text ? "/register" : "/login"}>
                            <span>{text ? "Sign Up now" : "Sign In"}</span>
                        </Link>
                    </h4>
                </form>
            </div>
            <div className="login-gradient"></div>
        </div>
    );
}

export default Login;
