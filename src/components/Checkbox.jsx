const Checkbox = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
      <h1 className="text-base leading-6 font-medium">
        Checkbox <span className="text-error">*</span>
      </h1>
      <div className="mt-5 grid gap-4">
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check1"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <label htmlFor="check1">Option 1</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check2"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <label htmlFor="check2">Option 2</label>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id="check3"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <label htmlFor="check3">Option 3</label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
