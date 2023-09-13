

import AuthLayer from 'containers/AuthLayer';
import Layout from 'containers/Layout';
import Login from 'containers/Login';
import GameBoard from 'pages/GameBoard';
import Home from 'pages/Home';
import ScoreBoard from 'pages/ScoreBoard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ():JSX.Element => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route 
                  index 
                  element={
                      <AuthLayer>
                          <Home />
                      </AuthLayer>
                  } 
              />
              <Route
                  path="/GameBoard"
                  element={
                      <AuthLayer>
                          <GameBoard />
                      </AuthLayer>
                  }
              />
              <Route
                  path="/ScoreBoard"
                  element={
                      <AuthLayer>
                          <ScoreBoard />
                      </AuthLayer>
                  }
              />
              <Route path="*" element={<Login />} />
          </Route>        
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;