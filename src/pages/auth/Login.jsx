import { useState } from "react";
import Footer from "../../components/layout/Footer";
import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine, RiQuestionLine } from "react-icons/ri";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length > 10) {
      setError("Please enter a valid 10-digit mobile number");
    } else {
      setError("");
    }

    setMobileNumber(value);
  };

  return (
    <>
      <div className="h-dvh w-full bg-cover bg-no-repeat relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="Desktop Banner"
          className="w-full h-full object-cover opacity-30"
        />

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

        <div className="absolute bottom-0 bg-gradient-to-t from-black left-0 px-4 py-10 w-full flex flex-col items-end lg:items-center justify-end lg:justify-center">
          <form className="w-full lg:max-w-2xl mx-auto">
            <h2 className="text-xl md:text-4xl font-semibold">
              Log in or sign up to continue
            </h2>
            <p className="text-sm py-2">
              Start watching from where you left off, personalise for kids and
              more
            </p>
            <div className="w-full flex py-6 items-center gap-2">
              <div className="border border-neutral-400 p-2 pr-3 rounded-lg h-full flex items-center">
                +91
              </div>
              <div className="w-full relative z-0">
                <input
                  type="tel"
                  pattern="[6789][0-9]{9}"
                  id="floating_standard"
                  value={mobileNumber}
                  onChange={handleInputChange}
                  className="block py-2.5 w-full text-sm bg-transparent border-b border-neutral-400 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter mobile number
                </label>
              </div>
            </div>
            {error && <p className="text-xs text-red-500 pb-4">{error}</p>}
            <p className="text-xs text-neutral-200 pb-4">
              By proceeding, you confirm that you are above 18 years of age and
              agree to the{" "}
              <Link
                to="https://www.hotstar.com/privacy-policy/in"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              &
              <Link
                to="https://hotstar.com/tnc/in"
                className="text-blue-600 hover:underline"
              >
                {" "}
                Terms of Use
              </Link>
              .
            </p>
            {mobileNumber.length === 10 && (
              <NavLink
                to="/verify-otp"
                className="w-full lg:w-fit text-sm py-2.5 font-medium pl-4 pr-2 gap-1 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Get OTP
                <RiArrowRightSLine size={20} />
              </NavLink>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
