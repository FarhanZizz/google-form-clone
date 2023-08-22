const Mcq = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
      <h1 className="text-base leading-6 font-medium">
        MCQ <span className="text-error">*</span>
      </h1>
      <div className="mt-5 grid gap-4">
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="mcq"
            id="option1"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="mcq"
            id="option2"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="mcq"
            id="option3"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
          <label htmlFor="option3">Option 3</label>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
