import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {
    // const [state, setState] = useState(initialState);
    // first argument will be stored in the variables
    // second state will be updated in the variables
    // initialState will be initialized as you want
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }


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
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>  
                <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />

                <ExpenseItem 
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
        
        
    )
}

export default Expenses
