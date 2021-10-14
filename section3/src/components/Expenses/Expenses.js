import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css"

function Expenses(props) {

    /*
    
        props is like extracting data from another file.
        props stands for properties.
        Here items is where you created variable in App.js
        and you assigned expenses which is JSX.
        This is why we can use like this below.
    
    */
    
    return (
        <Card className="expenses">
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
    )
}

export default Expenses
