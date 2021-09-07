import React from "react"
import { IMovieData } from "../Interfaces/IMovieData";
interface IGotMovies {
    link: any
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_MOVIE_DATA: string
        }
    }
}

export class GetMovies extends React.Component<IGotMovies> {
    constructor(readonly link: string) {
        super(link);
    }

    private getResource = async(url: string): Promise<IMovieData[]> => {
        const res = await fetch(`${process.env.REACT_APP_MOVIE_DATA}${url}`);
    
        if (!res.ok) {
            console.log('could not fetch the resource');
        }

        return res.json() as Promise<IMovieData[]>
    }

    getAllMovies = async(link: string) => {
        const movies = await this.getResource(`${this.link}${link}`);
        return movies;

    }
}

/* need followng paths from back */