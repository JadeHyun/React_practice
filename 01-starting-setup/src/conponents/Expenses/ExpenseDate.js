import './ExpenseDate.css'

const ExpenseDate = (props)=>{
    const month = props.dd.toLocaleString('ko-KR', {month:'long'})
    const day = props.dd.toLocaleString('ko-KR',{day:'2-digit'})
    const year = props.dd.getFullYear()

    return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-data-day'>{day}</div>
    </div>

    )

}

export default ExpenseDate