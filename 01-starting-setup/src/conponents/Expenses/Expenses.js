import React, {useState} from 'react'
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
 
function Expenses(props){
  const [filteredYear, setFilteredYear]  = useState('2021')

  const filteredList = props.list.filter(el => {
    return el.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  let nothingTxt = <p style={{"color":"red"}}>Nothing !!</p>

  if(filteredList.length > 0){
    nothingTxt = filteredList.map(el => {             
      return <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} list={props.list} />
    })
  }

      return (
          <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {nothingTxt}
          </Card>
      )
}

export default Expenses;