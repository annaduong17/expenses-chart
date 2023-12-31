function TotalExpenses() {
  return(
    <div id="total-content" className="flex-row space-between">
      <div id="total-amount">
        <h2>Total this month</h2>
        <p>$478.33</p>
      </div>
      <div id="total-increase" className="flex-col">
        <p>+2.4% from</p>
        <p>from last month</p>
      </div>
    </div>
  )
}

export default TotalExpenses;