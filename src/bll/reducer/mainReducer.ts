import {characterAPI} from "../../dal/axios";
import {call, put} from "redux-saga/effects"

const initState = {
    characters: [] as any,
    isFetching:false,
    currentPage:1,
}
type initState= typeof initState

export const mainReducer = (state:initState  = initState, action: any) => {

    switch (action.type) {

        case "SET_CHAR":
            return {...state, characters: [...state.characters, ...action.payload]}
        case "IS_FETCH":
            console.log(state.isFetching,"reducerFetch")
            return {...state,isFetching:action.isFetching}
        case "INC_CURRENT":
            return {...state,currentPage:action.currentPage}
        default:
            return state
    }

}



//Sagas
export function* getCharactersSagaWorker(action:any) {
    //@ts-ignore
    let res = yield call(characterAPI.getCharacter,action.currentPage)
    let payload = res.data.results
    yield put({type: 'SET_CHAR', payload})
    yield put({type:"IS_FETCH",isFetching:false})

}

export const getCharacters = (currentPage:number) => ({type: "CHAR",currentPage})

//action

