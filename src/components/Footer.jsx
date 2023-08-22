const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
