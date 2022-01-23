import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCharacters, mainReducer} from "./bll/reducer/mainReducer";
import {useAppSelector} from "./bll/store/store";
import {useEffect, useState} from "react";


export const Main = () => {
    const characters = useAppSelector(state => state.persons.characters)
    const Fetch = useAppSelector(state => state.persons.isFetching)
    const currentPage = useAppSelector(state => state.persons.currentPage)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("useEffect work")
        if (Fetch) {
            dispatch({type: "INC_CURRENT", currentPage: currentPage + 1})
            dispatch(getCharacters(currentPage))
        }
    }, [Fetch])

    useEffect(() => {

        document.addEventListener("scroll", scrollHandler)

        return () => {
            document.removeEventListener("scroll", scrollHandler)

        }
    }, [])

    const scrollHandler = (e: any) => {
        if (e.currentTarget.documentElement.scrollHeight - (e.currentTarget.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch({type: "IS_FETCH", isFetching: true})
        }
    }

    const getChar = () => {
        dispatch({type:"IS_FETCH",isFetching:true})
    }
    console.log(Fetch)
    console.log(currentPage)

    return (
        <div className={"App"}>
            <input/>
            <button onClick={getChar}>search</button>

            {characters.map((el: any) => {
                return <div key={el.id}>
                    <div>{el.name}</div>
                    <img src={el.image}/>
                </div>
            })}
        </div>
    )
}