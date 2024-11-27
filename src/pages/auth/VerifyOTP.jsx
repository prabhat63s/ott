import { RiArrowRightSLine, RiQuestionLine } from "react-icons/ri";
import Footer from "../../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    const value = element.value;

    // Only allow numbers
    if (!/^\d$/.test(value) && value !== "") {
      setError("Please enter only digits");
      return;
    }
    setError("");

    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6 || enteredOtp.includes("")) {
      setError("Please enter all 6 digits");
      return;
    }

    setError("");
    console.log("OTP Submitted:", enteredOtp);

    // Navigate or perform verification logic
    navigate("/");
  };

  return (
    <>
      <div className="h-dvh w-full bg-cover bg-no-repeat relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="Desktop Banner"
          className="w-full h-full object-cover opacity-30"
        />

        {/* Header */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 lg:px-10 text-white">
          <Link to="/">
            <h1 className="text-xl lg:text-2xl font-semibold">STREAM</h1>
          </Link>
          <Link
            to="/help"
            className="w-fit text-sm py-2 px-3 gap-2 flex items-center bg-slate-900 text-white rounded-lg hover:bg-neutral-700 transition"
          >
            <RiQuestionLine size={24} />
            Help & Support
          </Link>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 bg-gradient-to-t from-black left-0 px-4 py-10 w-full flex flex-col items-end lg:items-center justify-end lg:justify-center">
          <form className="w-full lg:max-w-xl mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-xl md:text-4xl font-semibold">
              Log in or sign up to continue
            </h2>
            <p className="text-sm py-2">
              Enter the 6-digit code sent to +91 6386144016
            </p>

            {/* OTP Fields */}
            <div className="flex justify-start items-center gap-4 py-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-10 lg:w-20 h-10 text-center text-xl bg-transparent text-white border-b focus:outline-none focus:ring-1 focus:ring-white"
                />
              ))}
            </div>

            {/* Error Message */}
            {error && <p className="text-xs text-red-500 pb-4">{error}</p>}

            {/* Resend Link */}
            <p className="text-xs text-neutral-200 pb-4">
              {"Didn't"} receive the code?{" "}
              <Link
                to="https://www.hotstar.com/privacy-policy/in"
                className="text-blue-600 hover:underline"
              >
                Resend code.
              </Link>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full lg:w-fit text-sm py-2.5 font-medium pl-4 pr-2 gap-1 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Verify OTP
              <RiArrowRightSLine size={20} />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
