import React, {useEffect} from 'react';
import Plyr from 'plyr';

export default function({video}) {

    useEffect(() => {
      
        if (document.body.plyrPlayer) {
            document.body.plyrPlayer.destroy();
            const player = document.getElementById('player');
            player && player.setAttribute('data-plyr-embed-id', video.video_id);
            
        }
        document.body.plyrPlayer = new Plyr('#player',{
            youtube: {
                noCookie: true
            }
        });

    }, [video])


    return <div className="plyr__video-embed" id="player"  data-plyr-provider="youtube" data-plyr-embed-id={video.video_id}></div>
}


    