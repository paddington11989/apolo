import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloAppProvider from './apoloprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ApolloAppProvider>
    <App />
    </ApolloAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);



