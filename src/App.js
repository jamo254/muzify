import React from 'react';
import { useEffect} from 'react';
import './App.css';
import Login from './Login';
import  Player from './Player';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  //dispatch used to update and so on state
  const [ {user, token}, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
       dispatch({
         type: "SET_TOKEN",
         token: _token,
       })
       //setToken(_token);

     
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
        //push data to data layer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
         dispatch({
           type: "SET_PLAYLISTS",
           playlists: playlists,
         });
      });

      spotify.getPlaylist('37i9dQZEVXcLrQSPr7HMrT').then(response => {
         dispatch({
           type: "SET_DISCOVER_WEEKLY",
           discover_weekly: response,
         })
      }
    );
  }
    
  }, []);


  return (
    <div className="App">
      {
        token ? (
         <Player  spotify={spotify} />
        ) : (
            <Login />
          )
      }


    </div>
  )
}

export default App
 