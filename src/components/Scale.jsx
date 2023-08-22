import { useState } from "react";

const Scale = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.id);

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const renderError = () => {
    if (hasInteracted && selectedValue === "") {
      return <p className="text-error text-sm mt-5">Please select a value</p>;
    }
    return null;
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && selectedValue === ""
          ? "border-error"
          : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        Linear Scale <span className="text-error">*</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-8 md:items-end md:justify-center">
        <p className="md:text-center">Best</p>
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className="flex flex-row md:flex-col items-center gap-5 px-5"
          >
            <label htmlFor={value.toString()}>{value}</label>
            <input
              type="radio"
              name="scale"
              id={value.toString()}
              className={`radio radio-sm radio-primary border-gray-500 border-2 ${
                hasInteracted && selectedValue === value.toString()
                  ? "border-error"
                  : ""
              }`}
              onChange={handleRadioChange}
            />
          </div>
        ))}
        <p className="md:text-center">Worst</p>
      </div>
      {renderError()}
    </div>
  );
};

export default Scale;
