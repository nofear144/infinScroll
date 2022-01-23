import axios from "axios";

export const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})
export const characterAPI = {
    getCharacter(page:number) {
       return instance.get(`character/?page=${page}`)
    }
}