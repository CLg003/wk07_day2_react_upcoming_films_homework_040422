import React, {useState} from 'react';
import FilmsList from '../components/FilmsList';
import MoreFilms from '../components/MoreFilms';

const FilmsBox = () => {

    const [films, setFilms] = useState([
        {
                id: 1,
                title: "Fantastic Beasts: The Secrets of Dumbledore",
                url: "https://www.imdb.com/title/tt4123432/?ref_=rlm",
                age: "12A",
                date: "08/04/22"
            },
            {
                id: 3,
                title: "Father Stu",
                url: "https://www.imdb.com/title/tt14439896/?ref_=rlm",
                age: "18",
                date: "15/04/22"
            },
            {
                id: 2,
                title: "Downton Abbey: A New Era",
                url: "https://www.imdb.com/title/tt11703710/?ref_=rlm",
                age: "PG",
                date: "29/04/22"
            },
            {
                id: 4,
                title: "Top Gun: Maverick", 
                url: "https://www.imdb.com/title/tt1745960/?ref_=rlm",
                age: "12A",
                date: "27/05/22"
            },
            {
                id: 5,
                title: "Jurassic World: Dominion",
                url: "https://www.imdb.com/title/tt8041270/?ref_=rlm",
                age: "12A",
                date: "10/06/22"
            }
    ]);

    return(
        <>
            <h1>Upcoming Film Releases</h1>
            <FilmsList films={films}/>
            <MoreFilms/>
        </>
    );
}

export default FilmsBox;