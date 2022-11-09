import config from '../../config.json';
import styled from "styled-components";
import { Menu } from "../components/Menu"
import { CSSReset } from "../components/CSSReset";
import { StyledTimeline } from "../components/TimeLine";

export default function Home() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlist={config.playlists} />

      </div>
    
    </>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlist);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos =  props.playlist[playlistName];
        return (
          <section className='myList'>
                <h2>{playlistName}</h2>
                <div>
                  {videos.map((video) => {
                    console.log( video)
                    return(
                      <>
                      <a href={video.url}>
                          <img src={video.thumb} alt={video.title} />
                          <span>
                            {video.title}
                          </span>
                      </a>
                      </>
                    );
                    
                    })
                  }
                </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
const StyledHeader = styled.div`
  .profile{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .banner{
    width: 100%;
    height: 200px;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  section{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  section h1{
    margin: 0;
  }
  section span{
    font-size:14px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={`https://unsplash.it/${config.width}/${config.height}`}/>

      <section className='user_info'> 
        <img className="profile" src={`https://github.com/${config.github}.png`}/>
        <div className='info'>
          <h1 className='info_name'>{config.name}</h1>
          <span>{config.job}</span>

        </div>
      </section>
    </StyledHeader>
  );
}