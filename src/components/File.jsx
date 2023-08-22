import { useState } from "react";

const File = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const deleteFile = () => {
    setSelectedFile(null);
  };

  const renderError = () => {
    if (hasInteracted && !selectedFile) {
      return <p className="text-error text-sm mt-5">Please upload a file</p>;
    }
    return null;
  };

  return (
    <div
      className={`bg-white rounded-lg border ${
        hasInteracted && !selectedFile ? "border-error" : "border-[#dadce0]"
      } p-6`}
    >
      <h1 className="text-base leading-6 font-medium">
        File Upload <span className="text-error">*</span>
      </h1>
      {selectedFile ? (
        <div className="flex items-center mt-5 w-max p-2 border-gray-300 border">
          <img
            src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_image_x16.png"
            alt="File Icon"
            className="w-4 h-4 mr-2"
          />
          <p>{selectedFile.name}</p>
          <button className="ml-2 cursor-pointer" onClick={deleteFile}>
            X
          </button>
        </div>
      ) : (
        <label
          htmlFor="file"
          className={`btn bg-white border text-info mt-5 hover:bg-blue-50 `}
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
      )}
      <input
        type="file"
        id="file"
        className="file-input file-input-bordered w-full max-w-xs mt-5 file-input-ghost hidden"
        onChange={handleFileChange}
      />
      {renderError()}
    </div>
  );
};

export default File;
