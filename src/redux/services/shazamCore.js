import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/*const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3e4277fd7fmsh0bc93fb5e985052p11948fjsna8e2af29ee68',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));*/

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com',
        prepareHeaders: (headers) => {
            if (!headers.has('X-RapidAPI-Key')) {
                headers.set('X-RapidAPI-Key', '13925b478fmsh07721eae464c803p1a8e29jsna5ed862505e5');
              }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/v1/charts/world'}),
        getSongsByGenre: builder.query({ query: (genre) => `/v1/charts/genre-world?genre_code=${genre}` }),
        getSongReleted: builder.query({ query: (songid) => `/v1/tracks/related?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: (artistid) => `/v2/artists/details?artist_id=${artistid}`}),
        getSongsByCountry: builder.query( {query: (country) => `v1/charts/country?country_code=${country}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    }),
});
export const {
    useGetTopChartsQuery,
    useGetSongReletedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi