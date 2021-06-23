import React, { useEffect, useState } from 'react';
import './tutorials.css';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';

const query = graphql`query MyQuery {
    allYoutubeVideo {
              nodes {
                 data {
                      video_id,
                     url,
                     title
          }
        }
    }
  }
`

const Tutorials = ({ videos }) => {

    if (!videos.length) {
        return null;
    }

    const [video, setVideo] = useState(videos[0]);

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


    return (
        <section className="tutorials">
            <div className="main-video">
                <div className="plyr__video-embed" id="player"  data-plyr-provider="youtube" data-plyr-embed-id={video.video_id}>
                    
                </div>
            </div>
            <div className="other-videos">
                {videos.filter(v => v.video_id !== video.video_id).map( v => {
                    return <div key={v.video_id} onClick={() => setVideo(v)} className="video-thumbnail" role="button" aria-label="change video">
                        <button type="button" className="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play Video"><svg aria-hidden="true" focusable="false"><use xlinkHref="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>
                        <img src={`https://img.youtube.com/vi/${v.video_id}/mqdefault.jpg`} />
                        </div>
                })}
            </div>
            <a href="https://www.youtube.com/c/Udesly" target="_blank" rel="noopener noreferrer" className="main-button">More Tutorials</a>
        </section>
    );

}

const TutorialsQuery = () => {

    return <StaticQuery query={query} render={
        data => <Tutorials videos={data.allYoutubeVideo.nodes.map(node => node.data) || []} />
    }></StaticQuery>

}

export default TutorialsQuery;