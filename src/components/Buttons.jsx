const Buttons = ({ label }) => {
  return (
    <div>
        <button className="px-4 py-2 bg-white text-navy-blue rounded hover:bg-navy-blue hover:text-white">
            {label}
        </button>
    </div>
  )
}

export default Buttons
