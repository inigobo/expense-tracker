import React, { useState } from "react";

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2022');

    const filterExpensesHandler = (enteredFilterYear) => {
        const filterYear = enteredFilterYear
        setFilterYear(enteredFilterYear);
        props.onFilterExpenses(filterYear);
    }

    

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected = {filterYear} onFilterExpenses={filterExpensesHandler} />
                {props.items.map(item => {
                    return (
                        <ExpenseItem
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                }
                )}
            </Card>
        </div>
    );
}

export default Expenses;