import React, {useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../Constants/Constant'
import axios from '../Constants/axios'

function RowPost(props) {
  const[movies, setmovies] = useState([])
  const[urlId,setUrlId] = useState('')

  useEffect(() => {
    // axios.get(discover/tv?api_key=${API_KEY}&with_networks=213)

    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }}

      const handleMovie = (id,isMovie)=>{
        console.log(id)
        // the link is get in the tmdb movie triler api
        const url= isMovie ? 
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US` 
         : `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;
         
        axios.get(url).then(response=>{
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0].key)
          }else {
            console.log('array empty')
          }
        })
        .catch(err => {
          console.error('Error fetching video:', err);
        });
      }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="poster">
          {movies.map((obj) =>
            <img onClick={()=>
              handleMovie(obj.id)
            } className={props.isSmall ? 'smallPost':'post'} src={`${imageUrl + obj?.backdrop_path}`} />
          )}
          {/* we dont use {} and return because when there is only one function to return we can use this method. */} 
            
        </div>
       { urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  )
}

export default RowPost