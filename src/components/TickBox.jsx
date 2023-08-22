const TickBox = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
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
        <div className="grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2">
          <p className="justify-self-start">Row 1</p>
          <input
            type="checkbox"
            name="row1_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row1_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row1_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
        </div>
        <div className="grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2">
          <p className="justify-self-start">Row 2</p>
          <input
            type="checkbox"
            name="row2_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row2_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row2_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
        </div>
        <div className="grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2">
          <p className="justify-self-start">Row 3</p>
          <input
            type="checkbox"
            name="row3_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row3_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
          <input
            type="checkbox"
            name="row3_check"
            className="checkbox checkbox-primary checkbox-sm rounded-none border-gray-500 border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TickBox;
