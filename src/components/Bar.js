function Bar({ value, className }) {
  console.log(className);
  return(
    <div>
      <div className={className}></div>
      <p>{value}</p>
    </div>
  )
}

export default Bar;