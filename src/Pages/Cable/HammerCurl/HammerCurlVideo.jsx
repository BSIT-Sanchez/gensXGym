import { useRef } from 'react';

function HammerCurlVideo() {
  const videoRef = useRef(null);


  return (
    <div className='img1 lg:h-full mt-2 md:mt-[50px]'>
      <video
        loop
        autoPlay
        controls
        ref={videoRef}
        src="/videos/hammercurl.mp4"
        className='w-full h-[20rem] 1xs:-mt-12 md:mt-0 rounded-sm'
      />
    
    </div>
  );
}

export default HammerCurlVideo;