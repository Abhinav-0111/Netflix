import React from "react";
import pic1 from "../component/assets/img/netflix.png";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        navigate("/");
    };
    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <a
                        className="navbar-brand a_1"
                        href="#"
                    >
                        <img
                            className="nav__logo"
                            src={pic1}
                        />
                    </a>
                    <div className="navbar navbar_1">
                        <form
                            className="d-flex"
                            role="search"
                        >
                            <select className="select">
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button
                                className="btn btn_color"
                                onClick={logout}
                            >
                                Log out
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Logout;
