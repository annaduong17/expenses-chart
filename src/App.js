import Balance from './components/Balance';
import Expenses from './components/Expenses';

function App() {
  fetch('../data.json').then(response => {
    console.log(response);
  })

  return(
    <div className='app'>
      <div id='container' className='flex-col'>
        <Balance />
        <Expenses />
      </div>
    </div>
  )
}

export default App;