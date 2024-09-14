import { useContext, useEffect, useState } from "react";
import AddMeal from "./AddMeal";
import Macros from "./Macros";
import History from "./History";
import MacrosContext from "./Context/MacrosContext";
import Charts from "./Charts";

function App() {
  // Initialize macros and meal history from localStorage
  const [macros, setMacros] = useState(() => {
    const savedMacros = localStorage.getItem('myMacros');
    return savedMacros ? JSON.parse(savedMacros) : { protein: 0, carbs: 0, fat: 0, calories: 0 };
  });

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('mealHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Track if goals have been set (stored in localStorage)
  const [goalsSet, setGoalsSet] = useState(() => {
    return JSON.parse(localStorage.getItem('goalsSet')) || false;
  });

  // Save macros to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("myMacros", JSON.stringify(macros));
  }, [macros]);

  // Save meal history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mealHistory", JSON.stringify(history));
  }, [history]);

  // Save goalsSet to localStorage
  useEffect(() => {
    localStorage.setItem('goalsSet', JSON.stringify(goalsSet));
  }, [goalsSet]);

  // Reset macros, history, and goals
  const handleResetMacros = () => {
    // Clear localStorage keys
    localStorage.removeItem('myMacros');
    localStorage.removeItem('mealHistory');
    localStorage.removeItem('macroGoals');
    localStorage.removeItem('goalsSet');

    // Reset states
    setMacros({ protein: 0, carbs: 0, fat: 0, calories: 0 });
    setHistory([]);
    setGoalsSet(false); // Return to goal-setting page
  };

  return (
    <MacrosContext.Provider value={[macros, setMacros, history, setHistory]}>
      <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto flex flex-col gap-5 relative">
        {/* Reset Macros Button */}
        <button
          className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white p-1 rounded-md font-semibold"
          onClick={()=> {handleResetMacros(); window.location.reload()}}
        >
          Reset Macros
        </button>

        <Macros />
        <hr />
        <AddMeal />
        <hr />
        <History />
        <hr/>
        <Charts />
      </div>
    </MacrosContext.Provider>
  );
}

export default App;
