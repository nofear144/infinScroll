import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {getCharactersSagaWorker, mainReducer} from "../reducer/mainReducer";
import {takeEvery} from "redux-saga/effects";
import {TypedUseSelectorHook, useSelector} from "react-redux";



const rootReducer = combineReducers({
    persons: mainReducer,
});
const sagaMiddleware = createSagaMiddleware()
export type rootReducerType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export const useAppSelector: TypedUseSelectorHook<rootReducerType> = useSelector;



sagaMiddleware.run(rootWatcher)

export function* rootWatcher() {
    yield takeEvery("CHAR", getCharactersSagaWorker)
}

// @ts-ignore
window.store = store;