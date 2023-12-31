function Bar({ value, className, style }) {
  console.log(className);
  return(
    <div>
      <div style={style} className={className}></div>
      <p>{value}</p>
    </div>
  )
}

export default Bar;