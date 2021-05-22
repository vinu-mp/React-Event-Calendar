import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  return(
    <div className="new-expense">
      <ExpenseForm getFormSubmitData={props.getFormData}/>
    </div>
  )
}

export default NewExpense