import { useState } from "react";

const Checkbox = () => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.id;
    setCheckedValues((prevValues) =>
      event.target.checked
        ? [...prevValues, value]
        : prevValues.filter((item) => item !== value)
    );

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const renderError = () => {
    if (hasInteracted && checkedValues.length === 0) {
      return (
        <p className="text-error text-sm mt-2">This is a required question</p>
      );
    }
    return null;
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && checkedValues.length === 0
          ? "border-error"
          : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        Checkbox <span className="text-error">*</span>
      </h1>
      <div className="mt-5 grid gap-4">
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check1"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="check1">Option 1</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check2"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="check2">Option 2</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check3"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="check3">Option 3</label>
        </div>
      </div>
      {renderError()}
    </div>
  );
};

export default Checkbox;
