import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isSet, setIsSet] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onExpenseData(expenseData);
    };

    const isSetHandler = (event) => {
        setIsSet(true);
    };

    const isSeFalsetHandler = (event) => {
        setIsSet(false);
    };

    return (
        <div className="new-expense">
            {!isSet && <button onClick={isSetHandler}>Add New Expense</button>}
            {isSet && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isSeFalsetHandler}/>}
        </div>
    );
};

export default NewExpense;