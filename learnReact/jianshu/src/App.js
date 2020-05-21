import React from 'react';
import Header from './common/header'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Route path='/' exact render={()=><div>home</div>}></Route>
        <Route path='/detail' exact render={()=><div>detail</div>}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
