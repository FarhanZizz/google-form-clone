const Scale = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
      <h1 className="text-base leading-6 font-medium">
        Linear Scale <span className="text-error">*</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-8 md:items-end md:justify-center">
        <p className="md:text-center">Best</p>
        <div className="flex flex-row md:flex-col items-center gap-5 px-5">
          <label htmlFor="1">1</label>
          <input
            type="radio"
            name="scale"
            id="1"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
        </div>
        <div className="flex flex-row md:flex-col items-center gap-5 px-5">
          <label htmlFor="2">2</label>
          <input
            type="radio"
            name="scale"
            id="2"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
        </div>
        <div className="flex flex-row md:flex-col items-center gap-5 px-5">
          <label htmlFor="3">3</label>
          <input
            type="radio"
            name="scale"
            id="3"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
        </div>
        <div className="flex flex-row md:flex-col items-center gap-5 px-5">
          <label htmlFor="4">4</label>
          <input
            type="radio"
            name="scale"
            id="4"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
        </div>
        <div className="flex flex-row md:flex-col items-center gap-5 px-5">
          <label htmlFor="5">5</label>
          <input
            type="radio"
            name="scale"
            id="5"
            className="radio radio-sm radio-primary border-gray-500 border-2"
          />
        </div>
        <p className="md:text-center">Worst</p>
      </div>
    </div>
  );
};

export default Scale;
