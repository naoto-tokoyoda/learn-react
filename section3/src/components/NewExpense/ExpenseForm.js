import './ExpenseForm.css'
import React, { useState } from 'react'


function ExpenseForm(props) {
    // The names on the left aren’t a part of the React API. You can name your own state variables:
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        /*
         
            This is saferway to ensure that ypu always operate on the latest state snapshot. 
            So you should use this function syntax here whenever your state update depends 
            on the previous state. 
            This is something you should memorize. 
            If your state update depends on the previous state, use this function form.
         
        */
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    }

    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //sending data to NewExpense.js
        //this props from ExpenseForm.js too
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={ enteredTitle }  
                        onChange={ titleChangeHandler } 
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={ enteredAmount }
                        onChange={ amountChangeHandler }
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2025-12-31" 
                        value={ enteredDate }
                        onChange={ dateChangeHandler } 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
