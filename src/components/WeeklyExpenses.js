import clsx from 'clsx';
import Amount from './Amount';
import Bar from './Bar';
import Data from '../data.json';

function WeeklyExpenses() {
  const amountsArr = [];
  
  for (const object of Data) {
    amountsArr.push(object.amount);
  }
 
  const largestAmount = Math.max(...amountsArr);
  console.log(largestAmount);

  

  const renderedItems = Data.map((item, index) => {


    const classes = clsx({
      "blue-bar": item.amount === largestAmount,
      "bar": true,
    })

    return(
      <div key={index} className="flex-col data">
        <Amount key={item.amount} value={item.amount} />
        <Bar key={item.value} value={item.day} className={classes} />
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