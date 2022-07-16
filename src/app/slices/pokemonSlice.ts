import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppDispatch } from "../store";
import { setLoading } from "./loadingSlice";

interface IPokemon {
  name: string;
  url: string;
}

interface IInitialState {
  pokemonList: Array<IPokemon>;
}

const initialState: IInitialState = {
  pokemonList: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Array<IPokemon>>) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;

export const getPokemon = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    let response;

    try {
      response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    } catch (error: any) {
      // dispatch(showSnackbar(error.message))
      dispatch(setLoading(false));
      return;
    }

    dispatch(setPokemonList(response.data.results));
    dispatch(setLoading(false));
  };
};

export default pokemonSlice.reducer;
