import Amount from './Amount';
import Bar from './Bar';
import Data from '../data.json';

function WeeklyExpenses() {
  const renderedItems = Data.map((item, index) => {
    return(
      <div className='flex-col data'>
        <Amount key={index} value={item.amount} />
        <Bar key={index} value={item.day} />
      </div>
    )
  })
  
  return(
    <div id='weekly-container'>
      <h2>Spending - Last 7 days</h2>
      <div id='bars' className='flex-row'>{renderedItems}</div>
    </div>
  )
}

export default WeeklyExpenses;