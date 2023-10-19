import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

function Homebanner() {
    const naviagte = useNavigate();
    const ClickHandler = (e) => {
        e.preventDefault();
        naviagte("./login");
    };
    return (
        <>
            <div className="home-banner">
                <div className="login_body">
                    <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                    <h2>
                        Endless entertainment starts at just ₹ 149. Cancel
                        anytime.
                    </h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h3>
                    <form className="login_form">
                        <input
                            type="text"
                            placeholder="Email Address"
                        />
                        <button onClick={ClickHandler}>
                            Get Started <KeyboardArrowRightIcon />
                        </button>
                    </form>
                </div>
                <div className="login-gradient"></div>
            </div>
        </>
    );
}

export default Homebanner;
