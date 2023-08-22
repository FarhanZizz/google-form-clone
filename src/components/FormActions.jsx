const FormActions = () => {
  return (
    <>
      <div className="md:hidden justify-self-center">
        <progress
          className="progress progress-success w-[184px] mr-2 h-[10px]"
          value="100"
          max="100"
        ></progress>{" "}
        Page 1 of 1
      </div>
      <div className="flex justify-between items-center">
        <button className="py-1.5 px-6 bg-primary text-white rounded-md font-semibold">
          Submit
        </button>
        <div className="hidden md:block">
          <progress
            className="progress progress-success w-[184px] mr-2 h-[10px]"
            value="100"
            max="100"
          ></progress>{" "}
          Page 1 of 1
        </div>
        <button
          htmlFor="file"
          className="btn normal-case bg-transparent text-primary hover:bg-blue-50 border-0"
        >
          Clear Form
        </button>
      </div>
    </>
  );
};

export default FormActions;
