import React, { useEffect, useState } from 'react'
import { useFetchAllVidoes } from '../../hooks/ApiHooks/Query/useFetchAllVideos'
import Video from '../molecules/Video';

const Reels = () => {
  const {isFetching ,isError ,isFetched ,error,data} = useFetchAllVidoes();
  const [videoPlaying , setVideoPlaying]=useState([]);
  const [playing ,setPlaying] = useState(null);

  useEffect(()=>{
    if(data && isFetched){
      setVideoPlaying([... data])
    }
  },[data,isFetched])

  if(isFetching){
    return <div>
        Loading......
      </div>
  }

  if(isError){
    return <div>
      error while fetching video
    </div>
  }

  return (
    <div className='w-[50vh] h-[90vh] border-2
     border-black rounded-md overflow-scroll 
      scrollbar-hide
      snap-y  snap-mandatory'>
        {data && isFetched && 
          videoPlaying.map(v=><Video id={v.id} key={v.id} url={v.url} 
            playing={playing}
            setPlaying={setPlaying}
            caption={v.caption}/>)
        }
    </div>
  )
}

export default Reels