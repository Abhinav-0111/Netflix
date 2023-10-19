import React, { useContext } from "react";
import pic1 from "../component/assets/img/netflix.png";
import { Link, useNavigate } from "react-router-dom";

function Header({ text, value }) {
    const navigate = useNavigate();
    const signinclickHandler = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand a_1"
                        to="/Netflix"
                    >
                        <img
                            className="nav__logo"
                            src={pic1}
                        />
                    </Link>
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
                                onClick={signinclickHandler}
                            >
                                {text}
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
