import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Error, Loader, RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongReletedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid, artistid} = useParams();
  console.log(artistid)
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector( (state) => state.player);
  const { data: dataRelatedSong,
          isFitching: isFitchingRelatedSong,
          error: errorReletedError
        } = useGetSongReletedQuery(songid)
  // console.log(dataRelatedSong)


  if(isFitchingRelatedSong) return <Loader title= 'Searshing Releted Songs'/>
  if(errorReletedError) return <Error/>

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, dataRelatedSong, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  return (
    <div className="flex flex-col">
      <RelatedSongs
        data={dataRelatedSong}
        artistid={artistid}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePlayClick={handlePlayClick}
        handlePauseClic={handlePauseClick}
      />
    </div>
  )
}

export default SongDetails