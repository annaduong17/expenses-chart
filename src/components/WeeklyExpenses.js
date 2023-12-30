import Amount from './Amount';
import Bar from './Bar';

function WeeklyExpenses() {
  return(
    <div>
      <h2>Spending - Last 7 days</h2>
      <Amount /> 
      <Bar />
    </div>
  )
}

export default WeeklyExpenses;