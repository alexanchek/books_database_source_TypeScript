import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import './extraInfo.scss'

interface ExtraInfoProps {
    icon: IconDefinition
    text: string
}

export const ExtraInfo: React.FC<ExtraInfoProps> = ({icon, text }) => {
    return (
        <div className="col s4 card-info">
            <div className="card__block ">
                <div className="icon mr-05">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    )
}