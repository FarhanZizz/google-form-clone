import { useState } from "react";

const Answer = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const renderError = () => {
    if (hasInteracted && userAnswer.trim() === "") {
      return (
        <p className="text-error text-sm mt-5">This is a required field</p>
      );
    }
    return null;
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && userAnswer.trim() === ""
          ? "border-error"
          : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        Short Answer <span className="text-error">*</span>
      </h1>
      <input
        type="text"
        placeholder="Your answer"
        className={`input w-full max-w-xs mt-5 outline-none focus:outline-none bg-white border-0 border-b-2 ${
          hasInteracted && userAnswer.trim() === ""
            ? "border-error focus:border-error"
            : "border-gray-300"
        } rounded-none focus:border-primary transition-all duration-300 p-0`}
        onChange={handleInputChange}
      />
      {renderError()}
    </div>
  );
};

export default Answer;
