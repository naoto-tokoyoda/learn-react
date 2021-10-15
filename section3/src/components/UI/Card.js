import React from 'react'
import './Card.css'



function Card(props) {
    /*
        Why I use classes variables and return using className because
        I want to make a cards rounded but do not want to duplicate styling 
        for both Expenses.js and ExpenseItem.js. So here is solution.

        In ExpenseItem.js, class name in Card will be:
        className = "card expense-item" 
        it is combined with Card.css and ExpenseItem.css

        Same as Expenses.js too. Class name in Card will be:
        className = "card expenses"
        it is combined with Card.css and Expenses.css

        After all these prosesses return the page as props.children.
        Why it is children because I edited the parent page where Expenses.js and 
        ExpenseItem.js and return both pages as children.

        This is how we use props in React
    */
    const classes = 'card ' + props.className;

    return <div className={classes}> {props.children} </div>;

}

export default Card
