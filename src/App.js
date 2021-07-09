import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './router';
import 'antd/dist/antd.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}


export default App;
