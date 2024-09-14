import React, { useState, useEffect } from 'react';
import MacrosContext from './Context/MacrosContext';
import AddMeal from './AddMeal';
import Macros from './Macros';
import History from './History';

function App() {
  const [macros, setMacros] = useState(() => {
    const savedMacros = localStorage.getItem('myMacros');
    return savedMacros ? JSON.parse(savedMacros) : { protein: 0, carbs: 0, fat: 0, calories: 0 };
  });

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('mealHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save macros and history to localStorage
  useEffect(() => {
    localStorage.setItem('myMacros', JSON.stringify(macros));
  }, [macros]);

  useEffect(() => {
    localStorage.setItem('mealHistory', JSON.stringify(history));
  }, [history]);

  return (
    <MacrosContext.Provider value={[macros, setMacros, history, setHistory]}>
      <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto flex flex-col gap-5">
        <Macros />
        <hr />
        <AddMeal />
        <hr />
        <History />
      </div>
    </MacrosContext.Provider>
  );
}

export default App;
