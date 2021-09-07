import React from "react"
import { faGlobe, faHourglass, faMap } from '@fortawesome/free-solid-svg-icons'
import NoPhotoImage from './no-image.jpg'
import { ExtraInfo } from "./ExtraInfo/ExtraInfo"
import { IMovieData } from "../Interfaces/IMovieData"

interface ICard {
    data: IMovieData
}

export const Card: React.FC<ICard> = (props) => {
    const renderImage = () => {
        if (props.data.image !== "") {
            return <img src={props.data.image} alt={props.data.name}/>
        }

        return <img src={NoPhotoImage} alt={props.data.name}/>
    }

    return (
        <div className="col s12 m4 cell">
            <div className="card">
                <div className="card-image">
                    {renderImage()}
                </div>
                <div className="card-content">
                    <span className="card-title">{props.data.name}</span>
                    <p>{props.data.desc}</p>
                </div>
                <div className="card-action">
                    <div className="row">
                        <ExtraInfo icon={faGlobe} text={`${props.data.country}`}/>
                        <ExtraInfo icon={faHourglass} text={`${props.data.year}`}/>
                        <ExtraInfo icon={faMap} text={`${props.data.genre}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}