import React,{useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = ()=>{
    const [enteredTitle,setEnteredTitle] = useState('Title')
// Title 관련 useState
    const [enteredAmount,setEnteredAmount] = useState('Amount')
// Amount 관련 useState
    const [enteredDate,setEnteredDate] = useState('Date')
// Date 관련 useState

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
// Title 상태 변경 함수 ( onChange )

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
// Amount 상태 변경 함수 ( onChange )

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
// Date 상태 변경 함수 ( onChange )

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>{enteredTitle}</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>{enteredAmount}</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>{enteredDate}</label>
                <input type="Date" min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm