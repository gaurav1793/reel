import React, { useEffect, useRef } from 'react'

const Video = ({id ,url ,caption ,playing ,setPlaying}) => {
  const videoRef = useRef(null);

  function handleClick(){
    if(videoRef.current.paused){
      videoRef.current.play();
      setPlaying(id);
    }
    else{
      videoRef.current.pause();
      setPlaying(null);
      
    }
  }

  useEffect(()=>{
    if(id!==playing){
      videoRef.current.pause();
    }
  },[id,playing])


  useEffect(() => {
    // use intersection observer to figure out when the video enters or exit the videoport
    const observer = new IntersectionObserver((entries) => {
        // entries are the elements that are being observed
        console.log(entries);
        entries.forEach(entry => {
            if(entry.isIntersecting) {
              console.log(id);
              
                videoRef.current.play(); // play the video when it is visible
                setPlaying(id);
            }
        })


    }, {
        threshold: 0.5 // 50% of the video is visible
    });

    if(videoRef.current) {
        observer.observe(videoRef.current);
    }

    return () => {
        if(videoRef.current) {
            observer.unobserve(videoRef.current);
        }
    }


}, [id, setPlaying]);

    

  return (
    <div className='h-full w-full relative snap-start'>
      <video className='w-full h-full absolute left-0 top-0 object-fill ' 
      ref={videoRef} loop onClick={handleClick} src={url}/>
    </div>
  )
}

export default Video