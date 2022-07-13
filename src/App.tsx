import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ListOfMeals } from './list-of-meals/listOfMeals';
import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/windowWithButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstRouteEl />} />
        <Route path='/secondEl' element={<SecondRuteEl />} />
        <Route path='/button' element={<WindowWithButton />} />

        <Route path='/mealList' element={<ListOfMeals />} />
      </Routes>
    </Router>
  );
}

export default App;
