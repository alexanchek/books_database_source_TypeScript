import React from "react"
import { Card } from "../Card/Card"
import { IMovieData } from "../Interfaces/IMovieData"

interface ICards {
    newCards: IMovieData[]
}

export const Cards: React.FC<ICards> = ({newCards}) => {
    console.log(newCards);
    return (
       <div className="row flex">
        {newCards.map(element => {
            return (
                <Card key={element.id} data={element}/>
            )
        })}
       </div>
   )
}