const Select = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-9">
      <select className="flex-1 min-w-[100px] px-4 py-2 bg-white text-black rounded focus:outline-none">
        <option>City</option>
        <option>Abuja</option>
        <option>Ibadan</option>
        <option>Lagos</option>
        <option>Port Harcourt</option>
      </select>

      <select className="flex-1 min-w-[100px] px-4 py-2 bg-white text-black rounded focus:outline-none">
        <option>Area</option>
        <option>Victoria Island</option>
        <option>Ikoyi</option>
        <option>Lekki</option>
      </select>

      <select className="flex-1 min-w-[160px] px-4 py-2 bg-white text-black rounded focus:outline-none">
        <option>Type of activity</option>
        <option>Beach</option>
        <option>Restaurant</option>
        <option>Museum</option>
      </select>
    </div>
  );
};

export default Select;
