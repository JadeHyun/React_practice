import React, {useState} from 'react';
// import { useState } from 'react/cjs/react.production.min';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const [viewForm, setViewForm] = useState(false)

    const onSaveExpenseData = (enteredExpenseData) => {
     const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString()
     };
     props.onAddExpense(expenseData)
     setViewForm(false)
    }

    const onViewHandler = () => {
        setViewForm(!viewForm)
    }

    const stopViewHandler = () => {
        setViewForm(false)
    }

    return (
    <div className='new-expense'>
        {!viewForm && <button onClick={onViewHandler}>Add New Expense</button>}
        {viewForm && <ExpenseForm onSaveExpenseData={onSaveExpenseData} stopView={stopViewHandler}/>}
    </div>
    )
}

export default NewExpense