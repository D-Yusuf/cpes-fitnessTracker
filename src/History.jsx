import React, { useContext } from "react";
import MacrosContext from "./Context/MacrosContext";

const History = () => {
  const [, , history] = useContext(MacrosContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Meal History</h2>
      {history.length === 0 ? (
        <p>No meal history available yet.</p>
      ) : (
        <ul className="list-disc list-inside flex flex-col gap-4 ">
          {[...history].reverse().map((entry, index) => (
            <>
              <li key={index} className="mb-2">
                <strong>Date:</strong> {entry.date} <br />
                <div className="text-center flex flex-col gap-2 my-5 text-lg">
                  <div>
                    <strong>Meal:</strong> {entry.meal} ({entry.grams}g) 
                  </div>
                  <div>

                    <strong>Calories:</strong> {entry.macros.calories.toFixed(2)}cal 
                  </div>
                  <div>
                    <strong>Protein:</strong> {entry.macros.protein.toFixed(2)}
                    g 
                  </div>
                  <div>
                    <strong>Carbs:</strong> {entry.macros.carbs.toFixed(2)}g
                    
                  </div>
                  <div>
                  <strong>Fat:</strong> {entry.macros.fat.toFixed(2)}g
                  </div>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
