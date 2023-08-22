import { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Choose");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const renderError = () => {
    if (hasInteracted && selectedOption === "Choose") {
      return (
        <p className="text-error text-sm mt-5">This is a required question</p>
      );
    }
    return null;
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && selectedOption === "Choose"
          ? "border-error"
          : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        Dropdown <span className="text-error">*</span>
      </h1>
      <select
        className={`select select-bordered bg-white outline-none focus:outline-none w-2/6 mt-5 border-gray-300`}
        onChange={handleSelectChange}
        value={selectedOption}
      >
        <option value="Choose">Choose</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      {renderError()}
    </div>
  );
};

export default Dropdown;
