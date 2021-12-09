import { types } from "../types/types";

const initialState = {
  productos: [],
  search: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listar:
      return {
        
        productos: [...state.productos, action.payload],
      };

    case types.buscar:
      return {
        productos: action.payload,
      };

    default:
      return state;
  }
};
