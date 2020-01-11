import Config from '../Config';

export const ACCESS_TOKEN = 'accessToken';
export const OAUTH2_REDIRECT_URI = Config.API.clientUrl + 'oauth2redirect';
export const GOOGLE_AUTH_URL = Config.API.serverUrl + 'oauth2/authorize/GOOGLE?redirect_uri=' + OAUTH2_REDIRECT_URI;
