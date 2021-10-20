import React, { useState } from 'react'
import Card from '../UI/Card';
import "./Expenses.css"
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';




function Expenses(props) {
    // const [state, setState] = useState(initialState);
    // first argument will be stored in the variables
    // second state will be updated in the variables
    // initialState will be initialized as you want
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    /*
    
        props is like extracting data from another file.
        props stands for properties.
        Here items is where you created variable in App.js
        and you assigned expenses which is JSX.
        This is why we can use like this below.
    
    */
    
    return (
        <div>
              
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />  
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
        
        
    )
}

export default Expenses
