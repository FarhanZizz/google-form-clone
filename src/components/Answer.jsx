const Answer = () => {
  return (
    <div className="bg-white rounded-lg border-[#dadce0] border p-6">
      <h1 className="text-base leading-6 font-medium">
        Short Answer <span className="text-error">*</span>
      </h1>
      <input
        type="text"
        placeholder="Your answer"
        className="input w-full max-w-xs mt-5 outline-none focus:outline-none bg-white border-0 border-b-2 border-gray-300 rounded-none focus:border-primary transition-all duration-300 p-0"
      />
    </div>
  );
};

export default Answer;
