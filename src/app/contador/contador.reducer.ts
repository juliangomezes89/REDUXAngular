import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar } from './contador.actions';
export const initialState = 20;

const _contadorReducer = createReducer( initialState,
    on(incrementar, state => state +1),
    on(decrementar, state => state -1),
);

export function contadorReducer(state, action){
    return _contadorReducer(state, action);
}