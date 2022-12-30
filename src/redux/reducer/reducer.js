import {
    SET_LENG, 
} from "../actions/actions";


const initialState = {
    lenguaje: {},
}


export default function rootReducer(state = initialState, payload) {
    switch (payload.type) {
        case SET_LENG:
            console.log("Test",payload.payload);
            return {
                ...state,
                lenguaje: payload?.payload.leng?.Tittles?.leng,
            }
        default:
        return { ...state };
    }
}