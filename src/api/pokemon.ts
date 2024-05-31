import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL, BASE_API } from '../constants/constants';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getPokemons: builder.query<any, void>({
            query: () => BASE_API,
        }),
        getPokemonById: builder.query<any, string>({
            query: (id) => `${BASE_API}${id}/`,
        }),
    }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;