export const YOUTUBE_TYPE = 'YOUTUBE';
export const DEEZER_TYPE = 'DEEZER';
export const UPDATE_USER = 'updateUser';
export const UPDATE_MEDIA = 'updateMedia';
export const UPDATE_CMEDIA = 'updateCMedia'; // C = current
export const UPDATE_FETCHSTATE = 'UPDATE_FETCHSTATE'; // C = current
export const UPDATE_DOWNLOAD = 'UPDATE_DOWNLOAD';
export const UPDATE_DOWNLOAD_FINISH = 'UPDATE_DOWNLOAD_FINISH';
export const UPDATE_DOWNLOAD_ERR = 'UPDATE_DOWNLOAD_ERR';
export const DOWNLOAD_PROGRESS = 'DOWNLOAD_PROGRESS';
export const DOWNLOAD_PROGRESS_INIT = 'DOWNLOAD_PROGRESS_INIT';
export const ON_FOCUS = 'ON_FOCUS';
export const ON_BLUR = 'ON_BLUR';
export const BLURRED = 'BLURRED';
export const FOCUSED = 'FOCUSED';
export const SHOW_ERROR = 'showerror';
export const FETCH_OBJ_START = 'FETCH_OBJ_START';
export const FETCH_SUCCESS_YOU = 'FETCH_SUCCESS_YOU';
export const FETCH_SUCCESS_DEEZ = 'FETCH_SUCCESS_DEEZ';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_ERROR_YOU = 'FETCH_ERROR_YOU';
export const FETCH_ERROR_DEEZ = 'FETCH_ERROR_DEEZ';
export const FETCH_DEFAULT = 'FETCH_DEFAULT';
export const API_KEY1 = 'AIzaSyB8R4Bqkx25_-c58L7v1QaLReVw1FWea28';
export const GOOGLE_SUGGEST = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt';
export const ACOMPLETE_ERR = 'AUTOCOMPLETE_ERR';
export const ACOMPLETE_SUC = 'AUTOCOMPLETE_SUCCESS';
export const SEARCH = 'Search';
export const SEARCHING = 'Searching';
export const SEARCHDONE = 'There you go...';
export const ERROR_STATE = 'Error';
export const ERROR_STATE_YOU = 'Error';
export const ERROR_STATE_DEEZ = 'Error';
export const DB_STORE_NAME = 'audiostore';
export const DB_STORE_PL = 'PlaylistStore';
export const DB_NAME = 'mylib';
export const GET_DB = 'GET_DB';
export var dynamicDNS = 'http://localhost:8888';

if (process.env.NODE_ENV !== 'development') {
  dynamicDNS = process.env.REACT_APP_amazonDNS;
}

export const ARROW_RIGHT = 'ArrowRight';
export const ARROW_LEFT = 'ArrowLeft';
