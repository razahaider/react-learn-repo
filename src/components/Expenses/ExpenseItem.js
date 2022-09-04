import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../ExpenseUtils/ExpenseDate'
import Card from '../Card/Card'
const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title)

  // const clickHandler = () => {
  // setTitle('updatedTitle ')
  //  console.log(title)
  // }
  return (
    // <div className='expense-item'>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.expense}</div>
      </div>
    </Card>
    // </div>
    //<button onClick={clickHandler}>click me</button>
    //clickhandler() will call the method without event trigger once when the JSX component is rendered
  )
}

export default ExpenseItem
