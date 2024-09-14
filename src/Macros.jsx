import React, { useState, useEffect, useContext } from 'react';
import MacrosContext from './Context/MacrosContext';

const Macros = () => {
  // Retrieve goals and macros from context
  const [myMacros, setMyMacros] = useContext(MacrosContext);
  
  // Retrieve goals from localStorage or set default values
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('macroGoals');
    return savedGoals
      ? JSON.parse(savedGoals)
      : { carbs: 0, fat: 0, protein: 0, calories: 0 };
  });

  const [goalsSet, setGoalsSet] = useState(() => JSON.parse(localStorage.getItem('goalsSet')) || false);

  // Save goals and goalsSet state to localStorage
  useEffect(() => {
    localStorage.setItem('macroGoals', JSON.stringify(goals));
    localStorage.setItem('goalsSet', JSON.stringify(goalsSet));
  }, [goals, goalsSet]);

  // Function to handle setting goals
  const handleSetGoals = () => {
    if (
      goals.calories > 0 &&
      goals.carbs > 0 &&
      goals.fat > 0 &&
      goals.protein > 0
    ) {
      setGoalsSet(true);
    } else {
      alert("Please fill all macro goals with values greater than 0.");
    }
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold text-center mb-4">Macros Tracker</h2>

      {!goalsSet ? (
        // Input form for setting daily goals
        <div>
          <h3 className="text-lg font-semibold mb-2">Set Your Daily Macro Goals</h3>

          <div className="mb-4">
            <label htmlFor="caloriesGoal" className="block font-medium mb-1">Calories Goal (kcal):</label>
            <input
              id="caloriesGoal"
              type="number"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={goals.calories}
              onChange={(e) => setGoals({ ...goals, calories: Number(e.target.value) })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="carbsGoal" className="block font-medium mb-1">Carbohydrates Goal (g):</label>
            <input
              id="carbsGoal"
              type="number"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={goals.carbs}
              onChange={(e) => setGoals({ ...goals, carbs: Number(e.target.value) })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fatGoal" className="block font-medium mb-1">Fat Goal (g):</label>
            <input
              id="fatGoal"
              type="number"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={goals.fat}
              onChange={(e) => setGoals({ ...goals, fat: Number(e.target.value) })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="proteinGoal" className="block font-medium mb-1">Protein Goal (g):</label>
            <input
              id="proteinGoal"
              type="number"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={goals.protein}
              onChange={(e) => setGoals({ ...goals, protein: Number(e.target.value) })}
            />
          </div>

          <button
            onClick={handleSetGoals}
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold"
          >
            Set Goals
          </button>
        </div>
      ) : (
        // Macro intake section once goals are set
        <div>
          <h3 className="text-lg font-semibold mb-2">Track Your Macros</h3>

          {/* Calories */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-bold">Calories</span>
              <span className="font-bold">{myMacros.calories}/{goals.calories} kcal</span>
            </div>
          </div>

          {/* Carbohydrates */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-teal-600 font-bold">Carbohydrates</span>
              <span className="font-bold">{myMacros.carbs}/{goals.carbs}g</span>
            </div>
          </div>

          {/* Fat */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-purple-600 font-bold">Fat</span>
              <span className="font-bold">{myMacros.fat}/{goals.fat}g</span>
            </div>
          </div>

          {/* Protein */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-yellow-600 font-bold">Protein</span>
              <span className="font-bold">{myMacros.protein}/{goals.protein}g</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Macros;
