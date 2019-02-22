import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name:'Baker'},
        { id: uuid(), name:'Transportation Unit'},
        { id: uuid(), name:'Theories'},
        { id: uuid(), name:'Krooked'},
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}