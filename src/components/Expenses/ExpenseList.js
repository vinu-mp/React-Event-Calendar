import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
const ExpenseList = (props) => {

  if (!props.expenses.length) {
    return <p className="expenses-list__fallback">There is no content to display</p>
  }

  return <ul className="expenses-list">{props.expenses.map(obj => <ExpenseItem deleteItem={props.deleteItem} key={obj.id} attributes = {obj}/>)}</ul>
}

export default ExpenseList;
