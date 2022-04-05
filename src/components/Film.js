import React from 'react';

const Film = ({url, children, logo, date}) => {
    return(
        <>
            <li>
                <h4>
                    <a href={url} target="_blank" className="film-title">{children}</a>
                    <img className="age" src={logo} height="15px"/>
                </h4>
                <p className="coming-on">Coming on {date}</p>
            </li>
        </>
    );
}

export default Film;