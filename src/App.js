import { useState } from 'react'
import Chart from './components/ExpensesChart/Chart'
import ExpenseFilter from './components/ExpenseUtils/ExpenseFilter'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import ExpensesChart from './components/Expenses/ExpensesChart'
import IntroductionTitle from './components/IntroductionTitle'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_DATA = [
  {
    title: 'vapes ',
    amount: 300,
    date: new Date(2020, 9, 12)
  },
  {
    title: 'mandi chicken',
    amount: 350,
    date: new Date(2020, 2, 12)
  },
  {
    title: 'vapes ',
    amount: 4500,
    date: new Date(2021, 9, 12)
  },
  {
    title: 'mandi chicken',
    amount: 220,
    date: new Date(2021, 2, 12)
  },
  {
    title: 'Car Insurance',
    amount: 123,
    date: new Date(2021, 10, 12)
  },
  {
    title: 'Groceries',
    amount: 456,
    date: new Date(2021, 11, 5)
  },
  {
    title: 'Travel',
    amount: 789,
    date: new Date(2021, 11, 4)
  }
]
function App () {
  const [expenseData, setExpenseData] = useState(DUMMY_DATA)
  const newExpenseDataHandler = newExpenseData => {
    //expenseData.values = { ...newExpenseData }
    //since this above line of code modifies expenseData so our expectation is this modified data will show in Expenses component
    //but in react refresh reload of components wont happen becos of static variable modification/updation
    //thts why this data needs to be update in State hooks and state hooks vars passed into components(since they re renders component on stat change
    return setExpenseData(prevState => [newExpenseData, ...prevState])
  }
  console.log('new expensedata updated: ')
  console.log(expenseData)

  return (
    <div className='App'>
      <header className='App-header'>
        <IntroductionTitle />
        <NewExpense getDataAppNewExpenseData={newExpenseDataHandler} />

        <Expenses expenses={expenseData} />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
