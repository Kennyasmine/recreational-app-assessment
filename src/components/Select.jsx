const Select = () => {
  return (
    <div className="flex space-x-4">
        <select className="px-4 py-2 bg-white text-black rounded focus:outline-none">
        <option>City</option>
        <option>Abuja</option>
        <option>Ibadan</option>
        <option>Lagos</option>
        <option>Port Harcourt</option>
        </select>

        <select className="px-4 py-2 bg-white text-black rounded">
        <option>Area</option>
        <option>Victoria Island</option>
        <option>Ikoyi</option>
        <option>Lekki</option>
        </select>

        <select className="px-4 py-2 bg-white text-black rounded">
        <option>Type of activity</option>
        <option>Beach</option>
        <option>Restaurant</option>
        <option>Museum</option>
        </select>
    </div>
  )
}

export default Select
