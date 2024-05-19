import React from "react";
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-1g font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
          ea foes.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2
    p1-3 border focus: outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 p1-3 border focus: outline-none
    bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* 2nd Box Get Noticed */}

      <div className=" mt-24">
        <h3 className="text-1g font-bold mb-2 flex items-center gap-2">
          <FaRocket/>
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
          ea foes.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2
    p1-3 border focus: outline-none"
          />
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full block py-2 p1-3 border focus: outline-none
    bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
