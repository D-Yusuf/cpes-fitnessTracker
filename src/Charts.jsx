import React, { useContext, useEffect, useRef } from 'react';
import { Chart, LinearScale, CategoryScale, BarController, BarElement } from 'chart.js';
import MacrosContext from './Context/MacrosContext';

// Register required components
Chart.register(LinearScale, CategoryScale, BarController, BarElement);

const Charts = () => {
  const [macros, , history] = useContext(MacrosContext); // Retrieve macros and history from context
  const macroGoals = JSON.parse(localStorage.getItem('macroGoals')) || { calories: 2000, protein: 150, carbs: 250, fat: 70 }; // Retrieve goals or set default values

  const caloriesChartRef = useRef(null);
  const proteinChartRef = useRef(null);
  const carbsChartRef = useRef(null);
  const fatChartRef = useRef(null);

  // Store chart instances to ensure proper destruction
  let caloriesChart, proteinChart, carbsChart, fatChart;

  // Calculate total macros from the history state
  const calculateTotals = () => {
    return history.reduce(
      (totals, entry) => {
        totals.calories += entry.macros.calories;
        totals.protein += entry.macros.protein;
        totals.carbs += entry.macros.carbs;
        totals.fat += entry.macros.fat;
        return totals;
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  };

  useEffect(() => {
    const totals = calculateTotals();

    // Destroy existing charts before creating new ones
    if (caloriesChart) caloriesChart.destroy();
    if (proteinChart) proteinChart.destroy();
    if (carbsChart) carbsChart.destroy();
    if (fatChart) fatChart.destroy();

    // Create chart for Calories
    caloriesChart = new Chart(caloriesChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Calories'],
        datasets: [
          {
            label: `Calories (${totals.calories}/${macroGoals.calories})`,
            data: [totals.calories], // Use total calories from history
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: macroGoals.calories, // Set max to calories goal
          },
        },
      },
    });

    // Create chart for Protein
    proteinChart = new Chart(proteinChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Protein'],
        datasets: [
          {
            label: `Protein (${totals.protein}/${macroGoals.protein})`,
            data: [totals.protein], // Use total protein from history
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: macroGoals.protein, // Set max to protein goal
          },
        },
      },
    });

    // Create chart for Carbs
    carbsChart = new Chart(carbsChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Carbs'],
        datasets: [
          {
            label: `Carbs (${totals.carbs}/${macroGoals.carbs})`,
            data: [totals.carbs], // Use total carbs from history
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: macroGoals.carbs, // Set max to carbs goal
          },
        },
      },
    });

    // Create chart for Fat
    fatChart = new Chart(fatChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Fat'],
        datasets: [
          {
            label: `Fat (${totals.fat}/${macroGoals.fat})`,
            data: [totals.fat], // Use total fat from history
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: macroGoals.fat, // Set max to fat goal
          },
        },
      },
    });

    // Cleanup function to destroy charts when the component is unmounted or updated
    return () => {
      if (caloriesChart) caloriesChart.destroy();
      if (proteinChart) proteinChart.destroy();
      if (carbsChart) carbsChart.destroy();
      if (fatChart) fatChart.destroy();
    };
  }, [history, macroGoals]); // Re-run effect whenever history or macroGoals change

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">Macro Charts</h2>

      {/* Calories Chart */}
      <div className="mb-4">
        <canvas ref={caloriesChartRef} />
      </div>

      {/* Protein Chart */}
      <div className="mb-4">
        <canvas ref={proteinChartRef} />
      </div>

      {/* Carbs Chart */}
      <div className="mb-4">
        <canvas ref={carbsChartRef} />
      </div>

      {/* Fat Chart */}
      <div className="mb-4">
        <canvas ref={fatChartRef} />
      </div>
    </div>
  );
};

export default Charts;
