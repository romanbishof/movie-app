import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesAsync = createAsyncThunk('movies/getMoviesAsync',
    async () => {
        let res = await axios.get(`https://api.tvmaze.com/shows`);
        let movies = res.data;
        return  movies 
    }
)



const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movies", 
    initialState,
    reducers: {
        // getMovie: (state, action) => {
        //     console.log(action.payload);
        //     let [movie] = current(state.movies).filter(movie => movie.id === action.payload)
        //     console.log(movie);
        // }
    },
    extraReducers: {
        [getMoviesAsync.pending]: (state, action) => {
            console.log("fetching data");
        },
        [getMoviesAsync.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        // [getMovieByIdAsync.fulfilled]: (state, action) => {

        // }
    },

});

export const {getMovie} = movieSlice.actions;

export default movieSlice.reducer;
