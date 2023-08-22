function App() {
  return (
    <div className="border-t-[10px] border-primary my-3 max-w-[90vw] md:w-[640px] mx-auto rounded-lg grid grid-cols-1 gap-4">
      {/* form info part */}
      <div className="bg-white divide-y rounded-b-lg border-[#dadce0] border">
        <h1 className="px-6 py-2 text-[33px]">Assignment Task</h1>
        <div className="px-6 py-3">
          <div className="mb-4">
            <span className="font-bold text-[15px] opacity-70 leading-5 ">
              iamfarhanaziz@gmail.com
            </span>
            {"  "}
            <a
              href="https://www.google.com"
              className="text-info text-sm leading-5"
            >
              Switch account
            </a>
          </div>
          <p className="text-sm text-[#5f6368]">
            The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response.
          </p>
        </div>
        <div className="px-6 py-3 text-error text-sm ">
          * Indicates required question
        </div>
      </div>
      {/* MCQ part */}
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
      {/* Checkbox part */}
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
      {/* short answer part */}
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
      {/* Paragraph part */}
      <div className="bg-white rounded-lg border-[#dadce0] border p-6">
        <h1 className="text-base leading-6 font-medium">
          Paragraph <span className="text-error">*</span>
        </h1>
        <input
          type="text"
          placeholder="Your answer"
          className="input w-full mt-5 outline-none focus:outline-none bg-white border-0 border-b-2 border-gray-300 rounded-none focus:border-primary transition-all duration-300 p-0"
        />
      </div>
      {/* Dropdown part */}
      <div className="bg-white rounded-lg border-[#dadce0] border p-6">
        <h1 className="text-base leading-6 font-medium">
          Dropdown <span className="text-error">*</span>
        </h1>
        <select className="select select-bordered bg-white outline-none focus:outline-none w-2/6 mt-5">
          <option selected>Choose</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      {/* File upload part */}
      <div className="bg-white rounded-lg border-[#dadce0] border p-6">
        <h1 className="text-base leading-6 font-medium">
          File Upload <span className="text-error">*</span>
        </h1>
        <input
          type="file"
          id="file"
          className="file-input file-input-bordered w-full max-w-xs mt-5 file-input-ghost hidden"
        />
        <label
          htmlFor="file"
          className="btn bg-white border text-info  mt-5 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g transform="translate(-3, -3)">
              <path
                d="M6,14.25 L7.5,14.25 L7.5,16.5 L16.5,16.5 L16.5,14.25 L18,14.25 L18,16.5 C18,17.325 17.325,18 16.5,18 L7.5,18 C6.675,18 6,17.325 6,16.5 L6,14.25 Z M9.3075,10.8075 L11.25,8.8725 L11.25,15 L12.75,15 L12.75,8.8725 L14.6925,10.815 L15.75,9.75 L12,6 L8.25,9.75 L9.3075,10.8075 Z"
                fill="#1a73e8"
              ></path>
              <path fill="none"></path>
            </g>
          </svg>
          Add file
        </label>
      </div>
      {/* Linear scale part */}
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
      {/* Multi choice Grid  part */}
      <div className="bg-white rounded-lg border-[#dadce0] border p-6">
        <h1 className="text-base leading-6 font-medium">
          Multi choice Grid <span className="text-error">*</span>
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
              type="radio"
              name="row1"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row1"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row1"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
          </div>
          <div className="grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2">
            <p className="justify-self-start">Row 2</p>
            <input
              type="radio"
              name="row2"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row2"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row2"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
          </div>
          <div className="grid grid-cols-4 justify-items-center bg-[#f8f9fa] py-4 px-2">
            <p className="justify-self-start">Row 3</p>
            <input
              type="radio"
              name="row3"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row3"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
            <input
              type="radio"
              name="row3"
              className="radio radio-sm radio-primary border-gray-500 border-2"
            />
          </div>
        </div>
      </div>
      {/* Tick box Grid  part */}
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
      {/* Form actions */}
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
          className="btn bg-transparent text-primary hover:bg-blue-50 border-0"
        >
          Clear Form
        </button>
      </div>
      {/* Copyright part */}
      <p className="text-xs opacity-90">
        Never submit passwords through Google Forms.
      </p>
      <p className="text-xs opacity-90 text-center">
        This content is neither created nor endorsed by Google.{" "}
        <u>Report Abuse</u> - <u>Terms of Service</u> - <u>Privacy Policy</u>
      </p>
      <div className="flex justify-center my-2 gap-1 items-center">
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
          alt="Google"
          height="24px"
          width="74px"
          className="opacity-50"
        ></img>{" "}
        <span className="text-[22.1px] relative -top-[3px] opacity-60">
          Forms
        </span>
      </div>
    </div>
  );
}

export default App;
