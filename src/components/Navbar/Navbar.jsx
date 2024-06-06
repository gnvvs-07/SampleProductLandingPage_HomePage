import React, { useState } from "react";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="text-xs">
      <div
        className="flex justify-between items-center p-2"
        style={{ backgroundColor: "#151218" }}
      >
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png"
          className="w-24 h-auto cursor-pointer"
          alt="Logo"
          onClick={toggleLinks}
        />
        <div
          className={`md:flex flex-col items-center md:flex-row justify-end ${
            showLinks ? "block" : "hidden"
          }`}
        >
          <div className="text-white cursor-pointer mr-4 my-1 group relative">
            <p>Product</p>
            <div className="absolute  hidden group-hover:block bg-pink-200 text-black p-6 z-10 shadow-lg rounded-t-lg right-0 left-auto">
              <div>
                <p className="font-semibold text-2xl border-b-2 border-black opacity-70">
                  Product Home
                </p>
                <div className="flex">
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-semibold">HELIX: Workflow Automation</p>
                    <p>Build and automate custom S&OP workflows</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-semibold">Accurate Demand Forecasting</p>
                    <p>
                      Dynamically predict future demand with unmatched accuracy
                    </p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">
                      Automated Distribution Planning
                    </p>
                    <p>
                      Automate distribution planning and allocation to maintain
                    </p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Automated Purchase Planning</p>
                    <p>Automate your purchase order generation</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Integrations</p>
                    <p>Yes, Crest works with your tech and ops stack!</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Custom Dashboards</p>
                    <p>Build and visualise data your way</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Consensus Planning</p>{" "}
                      <span className="italic">New</span>
                    </div>
                    <p>Collaborate and take better decisions faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white cursor-pointer mr-4 my-1">Pricing</div>
          <div className="text-white cursor-pointer mr-4 my-1 group relative">
            <p>Industry</p>
            <div className="absolute  hidden group-hover:block bg-pink-200 text-black p-6 z-10 shadow-lg rounded-t-lg right-0 left-auto">
              <div>
                <p className="font-semibold text-2xl border-b-2 border-black opacity-70">
                  Industry Home
                </p>
                <div className="flex">
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-semibold">HELIX: Workflow Automation</p>
                    <p>Build and automate custom S&OP workflows</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-semibold">Accurate Demand Forecasting</p>
                    <p>
                      Dynamically predict future demand with unmatched accuracy
                    </p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">
                      Automated Distribution Planning
                    </p>
                    <p>
                      Automate distribution planning and allocation to maintain
                    </p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Automated Purchase Planning</p>
                    <p>Automate your purchase order generation</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Integrations</p>
                    <p>Yes, Crest works with your tech and ops stack!</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <p className="font-semibold">Custom Dashboards</p>
                    <p>Build and visualise data your way</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2 ">
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Consensus Planning</p>{" "}
                      <span className="italic">New</span>
                    </div>
                    <p>Collaborate and take better decisions faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white cursor-pointer mr-4 my-1">
            Customer Stories
          </div>
          <div className="text-white cursor-pointer mr-4 my-1">About</div>
          <div className="text-white cursor-pointer mr-4 my-1">Blog</div>
          <div className="text-pink-400 cursor-pointer mr-4 my-1">Login</div>
          <div className="text-white cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 hover:text-black px-4 py-2 rounded-full my-1">
            Talk to us
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#151218" }}>
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Every order
                <br />
                fulfilled,{" "}
                <span className="text-pink-400 text-md font-mono">
                  on time.
                </span>
              </h1>
              <p className="text-md md:text-xl text-gray-400 leading-relaxed mb-8">
                This is a demo product landing page created by a student for his
                project or assignment purpose the content in this page is not
                real and the developer is not responsible for any actions
                performed by the user in this website, a fun made website by a
                student <a href="https://www.getcrest.ai/" target="_blank">click here</a> to visit the original website Eliminate overstocking and under-stocking with Crest.
                Built by supply-chain experts, it brings the same technology
                used by large global brands to power fast-growing startups. In
                short, we make supply meet demand, and then help you grow both.
              </p>
              <button className="text-pink-400 border border-pink-400 p-4 rounded-xl hover:border-white hover:text-white">
                Get Started with Crest
              </button>
            </div>
            <div className="md:order-first">
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
                loading="eager"
                alt="every order fulfilled"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
