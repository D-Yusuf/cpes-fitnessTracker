import React, { useState, useContext } from 'react';
import MacrosContext from './Context/MacrosContext';

const AddMeal = () => {
  // Meal data with nutrients per 100 grams
  const meals = [
    // High in Protein
    { name: 'Chicken Breast', protein: 30, carbs: 0, fat: 3, calories: 165 },
    { name: 'Salmon', protein: 25, carbs: 0, fat: 12, calories: 206 },
    { name: 'Eggs', protein: 13, carbs: 1, fat: 11, calories: 155 },
    { name: 'Turkey Breast', protein: 29, carbs: 0, fat: 1, calories: 135 },
    { name: 'Tuna (Canned)', protein: 25, carbs: 0, fat: 1, calories: 120 },
    { name: 'Greek Yogurt (Plain)', protein: 10, carbs: 6, fat: 0, calories: 60 },
    { name: 'Lean Ground Beef', protein: 27, carbs: 0, fat: 15, calories: 250 },
    { name: 'Shrimp', protein: 20, carbs: 0, fat: 1, calories: 85 },
    { name: 'Cod', protein: 19, carbs: 0, fat: 0.5, calories: 85 },
    { name: 'Lamb Chop', protein: 24, carbs: 0, fat: 22, calories: 320 },
    { name: 'Pork Tenderloin', protein: 22, carbs: 0, fat: 3, calories: 120 },
    { name: 'Tempeh', protein: 21, carbs: 9, fat: 11, calories: 195 },
    { name: 'Tofu', protein: 8, carbs: 2, fat: 5, calories: 85 },
    { name: 'Venison', protein: 25, carbs: 0, fat: 5, calories: 160 },
    { name: 'Duck Breast', protein: 24, carbs: 0, fat: 12, calories: 190 },
    { name: 'Mackerel', protein: 20, carbs: 0, fat: 13, calories: 205 },
    { name: 'Halibut', protein: 23, carbs: 0, fat: 2, calories: 120 },
    { name: 'Bison', protein: 24, carbs: 0, fat: 2, calories: 125 },
    { name: 'Quinoa (cooked)', protein: 8, carbs: 39, fat: 4, calories: 222 },
  
    // High in Carbohydrates
    { name: 'Brown Rice', protein: 5, carbs: 45, fat: 1.5, calories: 215 },
    { name: 'Sweet Potato', protein: 2, carbs: 24, fat: 0, calories: 103 },
    { name: 'Oatmeal', protein: 5, carbs: 27, fat: 3, calories: 150 },
    { name: 'Banana', protein: 1, carbs: 27, fat: 0, calories: 105 },
    { name: 'Pasta (Whole Wheat)', protein: 7, carbs: 43, fat: 1.5, calories: 210 },
    { name: 'White Bread', protein: 3, carbs: 20, fat: 1, calories: 80 },
    { name: 'Bagel', protein: 9, carbs: 48, fat: 1, calories: 250 },
    { name: 'Couscous', protein: 6, carbs: 36, fat: 0.5, calories: 176 },
    { name: 'Corn (Cooked)', protein: 3, carbs: 19, fat: 1, calories: 89 },
    { name: 'Lentils (Cooked)', protein: 9, carbs: 20, fat: 0.5, calories: 115 },
    { name: 'Baked Beans', protein: 6, carbs: 28, fat: 1, calories: 130 },
    { name: 'Chickpeas (Cooked)', protein: 6, carbs: 27, fat: 3, calories: 140 },
    { name: 'Green Peas', protein: 5, carbs: 21, fat: 0.5, calories: 120 },
    { name: 'Potato', protein: 3, carbs: 37, fat: 0.5, calories: 150 },
    { name: 'Barley (Cooked)', protein: 3.5, carbs: 44, fat: 1, calories: 193 },
    { name: 'Buckwheat', protein: 5, carbs: 33, fat: 1.5, calories: 154 },
    { name: 'Mango', protein: 1, carbs: 25, fat: 0, calories: 100 },
    { name: 'Apple', protein: 0, carbs: 25, fat: 0, calories: 95 },
    { name: 'Dates', protein: 1, carbs: 75, fat: 0.5, calories: 280 },
    { name: 'Pineapple', protein: 1, carbs: 21, fat: 0, calories: 82 },
    { name: 'Grapes', protein: 0.5, carbs: 18, fat: 0, calories: 70 },
    { name: 'Oranges', protein: 1, carbs: 15, fat: 0, calories: 62 },
  
    // High in Fat
    { name: 'Avocado', protein: 2, carbs: 15, fat: 22, calories: 250 },
    { name: 'Almonds', protein: 6, carbs: 6, fat: 14, calories: 160 },
    { name: 'Peanut Butter', protein: 8, carbs: 7, fat: 16, calories: 200 },
    { name: 'Walnuts', protein: 4, carbs: 4, fat: 18, calories: 180 },
    { name: 'Chia Seeds', protein: 4, carbs: 12, fat: 9, calories: 138 },
    { name: 'Sunflower Seeds', protein: 5, carbs: 6, fat: 14, calories: 160 },
    { name: 'Olives', protein: 1, carbs: 3, fat: 11, calories: 115 },
    { name: 'Coconut (Dried)', protein: 3, carbs: 15, fat: 33, calories: 354 },
    { name: 'Cheddar Cheese', protein: 7, carbs: 1, fat: 9, calories: 115 },
    { name: 'Cream Cheese', protein: 2, carbs: 2, fat: 10, calories: 100 },
    { name: 'Heavy Cream', protein: 0.5, carbs: 1, fat: 11, calories: 100 },
    { name: 'Bacon', protein: 12, carbs: 0, fat: 42, calories: 450 },
    { name: 'Pecans', protein: 3, carbs: 4, fat: 20, calories: 190 },
    { name: 'Macadamia Nuts', protein: 2, carbs: 4, fat: 21, calories: 200 },
    { name: 'Hazelnuts', protein: 4, carbs: 5, fat: 17, calories: 180 },
    { name: 'Pistachios', protein: 6, carbs: 8, fat: 13, calories: 160 },
    { name: 'Cashews', protein: 5, carbs: 9, fat: 12, calories: 160 },
    { name: 'Salami', protein: 17, carbs: 0, fat: 26, calories: 310 },
    { name: 'Pepperoni', protein: 14, carbs: 1, fat: 13, calories: 140 },
    { name: 'Butter', protein: 0, carbs: 0, fat: 11, calories: 100 },
    { name: 'Coconut Oil', protein: 0, carbs: 0, fat: 14, calories: 120 },
    { name: 'Olive Oil', protein: 0, carbs: 0, fat: 14, calories: 120 },
    { name: 'Ghee', protein: 0, carbs: 0, fat: 13, calories: 115 },
    { name: 'Mayonnaise', protein: 0, carbs: 0, fat: 10, calories: 90 },
  
    // Balanced Meals
    { name: 'Hummus', protein: 4, carbs: 9, fat: 6, calories: 100 },
    { name: 'Cottage Cheese', protein: 12, carbs: 4, fat: 2, calories: 100 },
    { name: 'Pizza', protein: 12, carbs: 35, fat: 10, calories: 285 },
    { name: 'Spaghetti with Meat Sauce', protein: 20, carbs: 55, fat: 15, calories: 400 },
    { name: 'Beef Tacos', protein: 20, carbs: 30, fat: 12, calories: 330 },
    { name: 'Chicken Caesar Salad', protein: 30, carbs: 15, fat: 20, calories: 400 },
    { name: 'Turkey Sandwich', protein: 25, carbs: 45, fat: 8, calories: 350 },
    { name: 'Beef Burger', protein: 25, carbs: 30, fat: 20, calories: 450 },
    { name: 'Grilled Cheese Sandwich', protein: 10, carbs: 30, fat: 15, calories: 300 },
    { name: 'Tuna Salad', protein: 20, carbs: 10, fat: 15, calories: 250 },
    { name: 'Falafel', protein: 5, carbs: 30, fat: 10, calories: 300 },
    { name: 'Pad Thai', protein: 20, carbs: 65, fat: 15, calories: 500 },
    { name: 'Lasagna', protein: 25, carbs: 45, fat: 20, calories: 500 },
    { name: 'Chicken Stir Fry', protein: 25, carbs: 40, fat: 10, calories: 350 },
    { name: 'Grilled Chicken Wrap', protein: 30, carbs: 40, fat: 12, calories: 400 },
    { name: 'Veggie Burrito', protein: 15, carbs: 60, fat: 15, calories: 400 },
    { name: 'Fish Tacos', protein: 20, carbs: 30, fat: 10, calories: 250 },
    { name: 'Sushi', protein: 10, carbs: 40, fat: 5, calories: 200 },
    { name: 'Chili with Beans', protein: 18, carbs: 35, fat: 10, calories: 300 },
    { name: 'Lamb Stew', protein: 25, carbs: 30, fat: 15, calories: 400 },
  ];

  // Retrieve macros from context
  const [macros, setMacros, history, setHistory] = useContext(MacrosContext);

  const [selectedMeal, setSelectedMeal] = useState(null);
  const [grams, setGrams] = useState(100);
  const [calculatedMacros, setCalculatedMacros] = useState({ protein: 0, carbs: 0, fat: 0, calories: 0 });

  const handleSelectMeal = (event) => {
    const mealName = event.target.value;
    const meal = meals.find((meal) => meal.name === mealName);
    setSelectedMeal(meal);
    setGrams(100); // Reset grams to 100
    updateMacros(100, meal); // Update macros based on default 100 grams
  };

  const updateMacros = (inputGrams, meal) => {
    const factor = inputGrams / 100;
    setCalculatedMacros({
      protein: meal.protein * factor,
      carbs: meal.carbs * factor,
      fat: meal.fat * factor,
      calories: meal.calories * factor,
    });
  };

  const handleGramsChange = (e) => {
    const newGrams = Number(e.target.value);
    setGrams(newGrams);
    if (selectedMeal) {
      updateMacros(newGrams, selectedMeal);
    }
  };

  const handleAddMacros = () => {
    if (!selectedMeal || grams <= 0) return;

    const updatedMacros = {
      protein: macros.protein + calculatedMacros.protein,
      carbs: macros.carbs + calculatedMacros.carbs,
      fat: macros.fat + calculatedMacros.fat,
      calories: macros.calories + calculatedMacros.calories,
    };

    // Add current meal entry to history with date and macros
    const newHistoryEntry = {
      meal: selectedMeal.name,
      grams,
      macros: calculatedMacros,
      date: new Date().toLocaleDateString(),
    };

    setHistory([...history, newHistoryEntry]); // Update meal history
    setMacros(updatedMacros); // Update macros in context
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">Add a Meal</h2>

      <div className="mb-4">
        <label htmlFor="mealSelect" className="block font-medium mb-2">
          Select a Meal:
        </label>
        <select
          id="mealSelect"
          className="border border-gray-300 p-2 rounded-md w-full"
          onChange={handleSelectMeal}
          defaultValue=""
        >
          <option value="" disabled>
            -- Select a Meal --
          </option>
          {meals.map((meal, index) => (
            <option key={index} value={meal.name}>
              {meal.name}
            </option>
          ))}
        </select>
      </div>

      {selectedMeal && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Enter the grams consumed for {selectedMeal.name}:</h3>
          <input
            id="gramsInput"
            type="number"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={grams}
            onChange={handleGramsChange}
            placeholder="Enter grams consumed"
          />

          <ul className="list-disc list-inside mt-4">
            <li>Calories: {calculatedMacros.calories.toFixed(2)} kcal</li>
            <li>Protein: {calculatedMacros.protein.toFixed(2)} g</li>
            <li>Carbs: {calculatedMacros.carbs.toFixed(2)} g</li>
            <li>Fat: {calculatedMacros.fat.toFixed(2)} g</li>
          </ul>

          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
            onClick={handleAddMacros}
          >
            Add Macros
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMeal;