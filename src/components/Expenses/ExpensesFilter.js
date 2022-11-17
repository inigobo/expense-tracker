import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // First version. No state handler needed oin this component to pass info up.
    // const [filterYear, setFilterYear] = useState('');

    // const changeFilterHandler = (event) => {
    //     event.preventDefault();
    //     setFilterYear(event.target.value);
    //     console.log(filterYear);
    //     props.onFilterExpenses(filterYear);
    // }

    const changeFilterHandler = (event) => {    
        props.onFilterExpenses(event.target.value);
    }
    // Add value prop to save the selected value. Otherwise info is passed with next render after having it saved in the 
    // state handler with the previous event.
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>

                <select value={props.selected} onChange={changeFilterHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;