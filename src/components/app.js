import * as React from 'react';
import TopBar from './topBar';
import BottomBar from './bottomBar';
import Main from './main'
export default function App() {
    return (
      <div id="main-container">
          <TopBar />
          <Main />
          <BottomBar /> 
      </div>
    );
  }

