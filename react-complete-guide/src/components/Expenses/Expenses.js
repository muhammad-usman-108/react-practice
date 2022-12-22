import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses (props) {

    let [filterYear, setFilterYear] = useState('2020');

    function changeFilter(selectedYear) {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString ===filterYear
    });

   
    return (
        <div className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={changeFilter}/>
            <ExpensesChart expenses={props.expenses}/>
            <ExpensesList expenses={props.expenses} year={filterYear}/>
        </div>
    );
}

export default Expenses;