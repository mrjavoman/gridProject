import React from 'react';

export function VideoWidget(props) {

    // Return video tags    
    return (
      <video width="380" height="225" controls>
        <source src="../video/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
    )
}