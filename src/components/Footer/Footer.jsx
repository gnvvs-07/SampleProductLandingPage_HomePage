import { CiTwitter, CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#151218" }} className="sm:text-xs p-6">
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-20 rounded-md my-6 mb-32 flex flex-col items-center justify-center animate-gradient">
        <h1 className=" text-white text-3xl font-bold mb-4">
          You can grow faster than you think!
        </h1>
        <p className=" text-white my-10">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </p>
        <button className="bg-black rounded-3xl p-3 text-white font-semibold focus:outline-none focus:ring focus:border-blue-300">
          Get started with Crest
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start px-5% justify-between">
        <div className="w-full md:w-1/2">
          <div className="arrow sm:hidden">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg"
              alt=""
            />
          </div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326df120ea3eb2_logo-white.svg"
            alt=""
            className="mt-8 w-48 md:w-auto"
          />
          <p className=" text-white mt-4 md:mt-8 md:text-left text-left">
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 justify-end">
          <div className="flex">
            <div>
              <h1 className=" text-white font-semibold">Explore</h1>
              <div>
                <p className=" text-white mt-2">Product</p>
                <p className=" text-white mt-2">Pricing</p>
                <p className=" text-white mt-2">Customer Stories</p>
                <p className=" text-white mt-2">Career</p>
              </div>
            </div>
            <div>
              <h1 className=" text-white font-semibold">Learn</h1>
              <div>
                <p className=" text-white mt-2">About us</p>
                <p className=" text-white mt-2">Blog</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-white font-semibold">Contact Company</h1>
            <div>
              <p className=" text-white mt-2">hello@company.com</p>
              <div className="mt-2">
                <p className="text-white">Registered office</p>
                <p className="text-white">1507, Incubex, 11th cross road, </p>
                <p className="text-white">19th Main Road,</p>
                <p className="text-white"> Bengaluru, India. 560102</p>
              </div>
              <div className="mt-2">
                <p className="text-white">Corporate Office:</p>
                <p className="text-white">291, All Time Space, </p>
                <p className="text-white">4th Floor,15th A Cross, </p>
                <p className="text-white">Sector - 6,HSR Layout,</p>
                <p className="text-white">Bengaluru, India. 560102</p>
              </div>
              <div className="logos flex mt-3 gap-5">
                <CiTwitter className="cursor-pointer text-white" />
                <CiFacebook className="cursor-pointer text-white" />
                <CiInstagram className="cursor-pointer text-white" />
                <CiLinkedin className="cursor-pointer text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between px-5% items-center">
          <div className="left">
            <div className="copyrights flex cursor-pointer justify-between gap-6">
              <p className="text-white">Copyright@2024 Company</p>
              <p className="text-white">Terms of service</p>
              <p className="text-white">Privacy Policy</p>
            </div>
            <div className="mt-2">
              <p className="text-white">Conifer Innovations Private Limited</p>
              <p className="text-white">CIN: U72900KA2022PTC163144</p>
            </div>
          </div>
          <div className="right hidden sm:block size-8">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
