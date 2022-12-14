import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying} = useSelector((state) => state.player)
  const {
          data: datasongsByCountry,
          isFetching: isFetchingSongsByCountry,
          error
  } = useGetSongsByCountryQuery(country);

  console.log(country)

  useEffect( () => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_nb33mMOtJQPnxHmM94MKa8iz7iOPv`)
    .then((res) => setCountry(res?.data?.location?.country))
    .then((error) => console.log(error))
    .finally(() => setLoading(false))
  },[country]);

  if( isFetchingSongsByCountry && loading) return <Loader title="Loading songs around you" />
  if ( error && country ) return <Error />
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {datasongsByCountry?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={datasongsByCountry}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou