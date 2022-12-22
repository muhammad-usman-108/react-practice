import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    let expensesContent = <p>No expense found.</p>;

    if(props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return <ul className="expenses-list">
        {
            props.expenses.filter(expense => new Date(expense.date).getFullYear().toString()===props.year).map(fexpense => (
                <ExpenseItem 
                key={fexpense.id} 
                title={fexpense.title} 
                amount={fexpense.amount} 
                date={fexpense.date}/>
            ))
        }
    </ul>;

}

export default ExpensesList;