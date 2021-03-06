import React from 'react';

import './ExpenseFilter.css'

const ExpensesFilter = (props) => {
    const dropDownChangeHandler = (e) =>{
        // console.log(e.target.value)
        // console.log(props.onChangeFilter)
        props.onChangeFilter(e.target.value)
        // props 로 받은 onChangeFilter 에 파라미터로 현재 값을 넘겨준다.
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
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