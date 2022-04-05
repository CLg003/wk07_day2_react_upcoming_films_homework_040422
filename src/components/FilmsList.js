import React from 'react';
import Film from './Film';

const FilmsList = ({films}) => {

    const filmNodes = films.map((film) => {
        { if (film.age === "U") {
            film.logo = "https://upload.wikimedia.org/wikipedia/commons/b/b3/BBFC_U_2019.svg"
        } else if (film.age === "PG") {
            film.logo = "https://upload.wikimedia.org/wikipedia/commons/1/14/BBFC_PG_2019.svg"
        } else if (film.age === "12A") {
            film.logo = "https://upload.wikimedia.org/wikipedia/commons/f/fc/BBFC_12A_2019.svg"
        } else if (film.age === "15") {
            film.logo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/BBFC_15_2019.svg"
        } else if (film.age === "18") {
            film.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1024px-BBFC_18_2019.svg.png"
        }}
        return(
            <Film key={film.id} logo={film.logo} url={film.url} date={film.date}>{film.title}</Film>
        );
    });

    return(
        <section className="films-list">
            <h2>Top 5 Films Coming Soon</h2>
            <ul>
                {filmNodes}
            </ul>
            
        </section>
    );
}

export default FilmsList;