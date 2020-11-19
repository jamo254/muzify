export const authEndpoint =
    "https://accounts.spotify.com/authorize";

const redirectURL = 'https://muzify-3db04.web.app/callback/';

const clientId = "b3edec8204084afabfd30a24f88f4ee1";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];



export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        // split at &
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;

        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}
&scope=${scopes.join("%20"
)} &response_type=token&show_dialog=true`;