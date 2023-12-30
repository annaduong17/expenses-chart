import Amount from './Amount';
import Bar from './Bar';
import Data from '../data.json';

function WeeklyExpenses() {
  const renderedItems = Data.map((item, index) => {
    return(
      <div>
        <Amount key={index} value={item.amount} />
        <Bar key={index} value={item.day} />
      </div>
    )
  })
  
  return(
    <div>
      <h2>Spending - Last 7 days</h2>
      {renderedItems}
    </div>
  )
}

export default WeeklyExpenses;