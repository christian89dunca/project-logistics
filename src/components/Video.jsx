import React from 'react';

const Video = ({src}) => {
    return ( 
        <iframe 
        width="100%" 
        height="315" 
        src={src} 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media;
         gyroscope; 
         picture-in-picture" 
        allowfullscreen="true">
        </iframe>
     );
}
 
export default Video;