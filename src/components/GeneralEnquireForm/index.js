const GeneralEnquireForm = () => {
  return (
    <div className="container mx-[132px] mt-[155.91px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h2 className="text-customBrown font-semibold text-5xl font-freightNeo">
            Excited about the <br /> possibilities your <br /> home could <br />{" "}
            offer?
          </h2>
          <p className="text-textCustomGray text-xl font-freightNeo pt-6">
  Take the first step towards the home of your <br />
  dreams. Fill in the form and begin your Journey.
</p>

          <hr className="w-[392px] mt-[38px] border-[1px] border-black border-opacity-20 transform rotate-0 left-[132px]" />
          <p className="text-textCustomGray text-xl font-medium pt-8">
            Alternately for your Queries contact
          </p>
          <span className="text-textCustomGray text-xl font-semibold ">
            +91 89046 88886
          </span>
        </div>

        {/* Right Side Form */}
        <div className="flex-1">
          <form className="space-y-8">
            {/* Full Name */}
            <div className="flex items-center border-b border-black border-opacity-20 py-2 w-[583px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-[20px]"
                type="text"
                placeholder="Your Full Name"
                aria-label="Full Name"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-black border-opacity-20 py-2 w-[583px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-[20px]"
                type="email"
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center border-b border-black border-opacity-20 py-2 w-[583px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-[20px]"
                type="text"
                placeholder="Your Phone Number"
                aria-label="Phone Number"
              />
            </div>

            {/* Additional Input */}
            <div className="flex items-center border-b border-black border-opacity-20 py-2 w-[583px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-[20px]"
                type="text"
                placeholder="Your Message or Inquiry"
                aria-label="Message or Inquiry"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralEnquireForm;
