import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const [isEditing, setIsEdting] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            //this is dragging data from ExpenseForm.js
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEdting(false);
    }

    const startEditingHandler = () => {
        setIsEdting(true);
    }

    const stopEditingHandler = () => {
        setIsEdting(false);
    }

    return (
        <div className="new-expense">
            {/*
                if it is false. This means it shows button because default setting is false
                After clicking the button, isEditing is true
            */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/*
                if it is true. This means it shows ExpenseForm
                after clicking add expense form, isEdting is false
            */}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            
            )}
        </div>
    )
}

export default NewExpense
