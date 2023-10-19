import React from "react";
import Header from "./component/Header";
import Homebanner from "./component/Homebanner";
import Banner from "./component/Banner";
import List from "./component/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Logout from "./component/Logout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/Netflix"
                        element={
                            <>
                                <Header text="Sign In" />
                                <Homebanner />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <Header
                                    text="Sign Up"
                                    value={true}
                                />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <>
                                <Header
                                    text="Sign In"
                                    value={false}
                                />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <Logout />
                                <Banner />
                                <List
                                    title="Netflix Originals"
                                    param="originals"
                                />
                                <List
                                    title="Trending Now"
                                    param="trending"
                                />
                                <List
                                    title="Now Playing"
                                    param="now_playing"
                                />
                                <List
                                    title="popular"
                                    param="popular"
                                />
                                <List
                                    title="Top Rated"
                                    param="top_rated"
                                />
                                <List
                                    title="Upcoming"
                                    param="upcoming"
                                />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
