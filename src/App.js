// The below React importing was used in the older react applications on all the files.
import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from "./components/ExpenseItem";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // The below code is the actual representation of the JSX behind the scene code which requires React importing.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement('p', {}, "This is also visible"),
  //   React.createElement(Expenses, {item: expenses})
  // );

  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      // console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
