// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Page from './page';


function renderApp() {
  ReactDOM.render(
    <App onSelect={renderPage}/>,
    document.querySelector(".app")
  );
}

function renderPage(cat) {  
  ReactDOM.render(
    <Page onSelect={renderApp} octo={cat}/>,
    document.querySelector(".app")
  )
}

renderApp();

// setTimeout(renderPage, 5000);
