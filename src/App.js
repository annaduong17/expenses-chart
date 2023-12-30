import Balance from './components/Balance';
import Expenses from './components/Expenses';

function App() {
  fetch('../data.json').then(response => {
    console.log(response);
  })


  return(
    <div>
      <Balance />
      <Expenses />
    </div>
  )
}

export default App;