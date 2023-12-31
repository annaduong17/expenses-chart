import WeeklyExpenses from './WeeklyExpenses';
import TotalExpenses from './TotalExpenses';

function Expenses() {
  return(
    <div id='expenses-container' className='border-round'>
      <WeeklyExpenses />
      <TotalExpenses />
    </div>
  )
}

export default Expenses;