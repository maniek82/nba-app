import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';



const VideosMain = () => {
    return(
        <div>
            <VideosList 
                type="card"
                title={false}
                loadmore={true}
                start={3}
                amount={3}
            />
        </div>
    )
}

export default VideosMain;