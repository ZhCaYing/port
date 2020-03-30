import React from 'react';
import GuanLi from './page';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <HashRouter> <GuanLi /></HashRouter>
    </div>
  );
}

export default App;
