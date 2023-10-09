import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="app-auth42069.us.auth0.com"
    clientId="A9aIFX0VbWlB6Q13VPoe5XePalFvnDKr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

