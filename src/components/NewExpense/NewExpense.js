import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const hideFormHandler = () => {
        setShowForm(false);
    }

    const showFormHandler = () => {
        setShowForm(true);
    }



    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add new expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler} />}
        </div>
    )
};

export default NewExpense;