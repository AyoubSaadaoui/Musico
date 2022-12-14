import React from 'react'
import SongBar from './SongBar'

const RelatedSongs = ({ data, artistid, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  console.log(data)
  return (
    <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${artistid}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistid}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
  )
}

export default RelatedSongs
