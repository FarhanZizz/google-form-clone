import { useState } from "react";

const TickBox = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleCheckboxChange = (event, row) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const hasSelectedOptionsForAllRows = () => {
    return [1, 2, 3].every(
      (row) =>
        selectedOptions[`row${row}_check`] === true ||
        selectedOptions[`row${row}_check`] === undefined
    );
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && !hasSelectedOptionsForAllRows()
          ? "border-error"
          : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        Tick box Grid <span className="text-error">*</span>
      </h1>
      <div className="grid grid-cols-1 gap-1 mt-5">
        <div className="grid grid-cols-4 justify-items-center mb-4">
          <div></div>
          <h1>Column 1</h1>
          <h1>Column 2</h1>
          <h1>Column 3</h1>
        </div>
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            className={`grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2 ${
              hasInteracted && !selectedOptions[`row${row}_check`]
                ? "border-error"
                : ""
            }`}
          >
            <p className="justify-self-start">Row {row}</p>
            {[1, 2, 3].map((col) => (
              <input
                key={col}
                type="checkbox"
                name={`row${row}_check`}
                className={`checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2 `}
                onChange={(event) => handleCheckboxChange(event, row)}
              />
            ))}
          </div>
        ))}
        {hasInteracted && !hasSelectedOptionsForAllRows() && (
          <p className="text-error text-sm mt-5">
            This question requires at least one response per row
          </p>
        )}
      </div>
    </div>
  );
};

export default TickBox;
