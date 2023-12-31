import { useState } from 'react';
import clsx from 'clsx';
import Amount from './Amount';
import Bar from './Bar';
import Data from '../data.json';

function WeeklyExpenses() {
  const [ hoveredBar, setHoveredBar ] = useState(null);
  const amountsArr = [];
  
  for (const object of Data) {
    amountsArr.push(object.amount);
  }
 
  const largestAmount = Math.max(...amountsArr);


  const renderedItems = Data.map((item, index) => {
    const isBarHovered = hoveredBar === index;

    const classes = clsx({
      "blue-bar": item.amount === largestAmount,
      "bar": true,
    })

    return(
      <div key={index} className="flex-col data">
        {isBarHovered && <Amount 
          key={item.amount} 
          value={item.amount} 
        />}
        <Bar 
          style={{ height: item.amount * 3 + 'px' }}
          key={item.value} 
          value={item.day} 
          className={classes} 
          onMouseEnter={() => setHoveredBar(index)}
          onMouseLeave={() => setHoveredBar(null)} 
        />
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