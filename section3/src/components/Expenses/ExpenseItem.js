import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {
    return (
        <li>
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
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        ${props.amount}
                    </div>
                </div>
            </Card>
        </li>
    )
}
