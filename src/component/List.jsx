import React, { useEffect, useState } from "react";
import fetchApiData from "./api/Api";

function List({ title, param }) {
    const [list, setlist] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        fetchApiData(param).then((res) => {
            setlist(res.data.results);
        });
    };
    // console.log(list);
    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">{title}</h2>
                <div className="col">
                    <div className="row__posters">
                        {list.map((item, index) => {
                            return (
                                <>
                                    <img
                                        className="row__poster row__posterLarge"
                                        key={index}
                                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                        alt={item.title}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
