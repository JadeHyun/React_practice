import React,{useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [enteredTitle,setEnteredTitle] = useState('')
// Title 관련 useState
    const [enteredAmount,setEnteredAmount] = useState('')
// Amount 관련 useState
    const [enteredDate,setEnteredDate] = useState('')
// Date 관련 useState

    // const [userInput, setUserInput]=useState({ // 여러개의 상태를 하나의 상태로 만들어줌.
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // Title 상태 변경 함수 ( onChange )
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput, // 앞에 내용을 복사하지 않으면 state는 전에 있던 내용을 간직하는게 아니라 현재의 값만 남겨버린다.
        //     // 그래서 전에 값을 복사하고 변경되는 값만 재할당 해준다.
        //     enteredTitle:event.target.value,
        // })
    }

    // Amount 상태 변경 함수 ( onChange )
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // titleChangeHandler 와 다른 방법이 있는데 이 방법을 사용하는 것이 더 좋아보인다. 
        // 그 이유는 객체의 상태로 리액트를 계속 사용하게 되면 이전의 상태에 의존하여(리액트에서 상태는 이전의 상태를 또 불러줘야 없어지지 않는다.)  최신의 상태를 작성할 때 이슈가 생길수도 있다고? 한다.
        // setUserInput((prevState)=>{ // 이 방법은 리액트를 하면서 자주 보게 될 방법이니 꼭 알아두자! 
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }


    // Date 상태 변경 함수 ( onChange )
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    }

    const submitHandler = (e) =>{
        e.preventDefault()

        const expenseData ={
            titel: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" placeholder='0' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="Date" value={enteredDate} min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm