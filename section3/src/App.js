import React from 'react';
import Expenses from './components/Expenses/Expenses';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* 

        Everything is ok the name of "items". 
        You can name it whatever you want.
        Make sure you pass the argument and use it in the component 
      
      */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
