function Bar({ value }) {
  return(
    <div key={value}>
      <div className="bar"></div>
      <p>{value}</p>
    </div>
  )
}

export default Bar;