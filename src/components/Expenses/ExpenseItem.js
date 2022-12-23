import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {

	// const expenseDate = new Date(2022, 2, 28);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 294.67;

  const [title, setTitle] = useState(props.title);
  

  const clickHandler = () => {
    // console.log('Clicked!');
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div> */}

			<ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
