import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('all');

    const filterExpensesHandler = (enteredFilterYear) => {
        const filterYear = enteredFilterYear
        setFilterYear(enteredFilterYear);
        props.onFilterExpenses(filterYear);
    }

    let filteredItems = [];

    if (filterYear !== 'all') {
        filteredItems = props.items.filter(item => {
            return item.date.getFullYear().toString() === filterYear;
        })
    } else {
        filteredItems = [...props.items];
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterExpenses={filterExpensesHandler} />
                <ExpensesChart expenses={filteredItems}/>
                <ExpensesList items={filteredItems} />
            </Card>
        </div>
    );
}

export default Expenses;