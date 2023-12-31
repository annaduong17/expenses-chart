

function Bar({ value, className, style, onMouseEnter, onMouseLeave }) {

  return(
    <div>
      <div 
        style={style} 
        className={className}
        onMouseEnter={onMouseEnter}
        oneMouseLeave={onMouseLeave}
      >
      </div>
      <p>{value}</p>
    </div>
  )
}

export default Bar;