const Info = () => {
  return (
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
          recorded when you upload files and submit this form. Your email is not
          part of your response.
        </p>
      </div>
      <div className="px-6 py-3 text-error text-sm ">
        * Indicates required question
      </div>
    </div>
  );
};

export default Info;
