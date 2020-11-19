import React from 'react';
import './Sidebar.css';
import MuzifyLogo  from './images/muzifylogo1.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function SideBar() {
   const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
           <img
           className="sidebar__logo"
            src={MuzifyLogo} alt="Muzinfy" />

            <SidebarOption Icon={HomeIcon}  title="Home" />
            <SidebarOption Icon={SearchIcon}   title="Search" />
            <SidebarOption Icon={LibraryMusicIcon}  title="Your Library" />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

          
        </div>
    )
}

export default SideBar
