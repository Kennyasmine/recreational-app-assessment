const Buttons = ({ children, className, onClick, type = "button", label }) => {
  return (
     <button
      type={type}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  )
}

export default Buttons
