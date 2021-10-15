import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {
    //to change title 
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('updated!');
    }

    return (
        <Card className="expense-item">

            {/* 
            
                This date is:
                    <ExpenseItem 
                        title={props.items[0].title}
                        amount={props.items[0].amount}
                        date={props.items[0].date}
                    />
                from Expenses.js 

            */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler} >Change title</button>
        </Card>
    )
}
