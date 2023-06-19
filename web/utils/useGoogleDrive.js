import { useState } from 'react';

const CLIENT_ID = 'your-client-id';
const API_KEY = 'your-api-key';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

const useGoogleDrive = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };

  const initClient = async () => {
    try {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    } catch (error) {
      console.error(error);
    }
  };

  const updateSigninStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };

  const handleSignIn = async () => {
    try {
      await gapi.auth2.getAuthInstance().signIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await gapi.auth2.getAuthInstance().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return { isSignedIn, handleClientLoad, handleSignIn, handleSignOut };
};

export default useGoogleDrive;
