const Dropdown = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
      <h1 className="text-base leading-6 font-medium">
        Dropdown <span className="text-error">*</span>
      </h1>
      <select className="select select-bordered bg-white outline-none focus:outline-none w-2/6 mt-5">
        <option selected>Choose</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
