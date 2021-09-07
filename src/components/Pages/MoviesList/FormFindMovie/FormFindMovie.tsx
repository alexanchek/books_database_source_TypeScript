import React, { useState } from "react"
import { ButtonReceive } from "../../../Buttons/ButtonReceive"
import { Cards } from "../../../Cards/Cards"
import { InputField } from "../../../InputField/InputField"
import { IInputsState } from '../../../Interfaces/IInputsState'
import { IMovieData } from "../../../Interfaces/IMovieData"
import { GetMovies } from "../../../Services/getMovies"
import { SumDataBlock } from "../../../SumDataBlock/SumDataBlock"
import './formStyles.scss'


export const FormFindMovie: React.FC = () => {
   const [state, setState] = useState<IMovieData[]>([] as IMovieData[]); // state for movies data
   const [inputsState, setInputsState] = useState<IInputsState>({genre: "", country: "", year: ""}); // state for data from inputs
   const [loading, setLoading] = useState(false); // state for loading state

   const getMovies = new GetMovies('?action=getMovies'); // the common link for requests

   const handleClick = async() => {
       let finalString: string = ""
       
       if (inputsState.country !== "") {finalString += `&getCountry=${inputsState.country}`};
       if (inputsState.year !== "") {finalString += `&getYear=${inputsState.year}`};
       if (inputsState.genre !== "") {finalString += `&getGenre=${inputsState.genre}`};

       setLoading(true);
       const moviesData: IMovieData[] = await getMovies.getAllMovies(finalString);
       setState(moviesData);
       setLoading(false);
       return moviesData;
   }

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
       const field = e.target.name;
       const value = e.target.value;
       setInputsState(prev => ({
           ...prev, [field]: value
       }))
   }

   const spinner = () => {
        return (
            <img style={{width: "100%"}} src="./loading.gif" alt="spinner"/>
        )
   }

    return (
        <>
            <div className="row">
                <form onClick={e => {e.preventDefault()}} className="col s12">
                    <InputField label={"Год фильма"} name="year" helperText={'none'} type={"text"} onChange={onChangeHandler}/>
                    <InputField label={"Жанр"} name="genre" helperText={'none'} type={"text"} onChange={onChangeHandler}/>
                    <InputField label={"Страна"} name="country" helperText={'none'} type={"text"} onChange={onChangeHandler}/>
                    <ButtonReceive onClick={handleClick}/>
                </form>
            </div>

           <SumDataBlock label={"Фильмов"} length={state.length}/>

            {/* <div className="row flex"> */}
                {loading ? spinner() : <Cards newCards={state}/>}
            {/* </div> */}
        </>
    )
}