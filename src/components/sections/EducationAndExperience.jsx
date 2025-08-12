import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";

import { PiCertificateFill } from "react-icons/pi";


function EducationAndExperience() {
  return (
    <section id="education-and-experience" className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2">
      {/* =========== EDUCATION =========== */}
      <div className="w-full md:w-[80%]">
        {/* =========== EDUCATION TITLE =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaLandmark className="text-xl text-red-800 dark:text-red-500" />
          Education
        </h4>

        {/* =========== EDUCATION LIST =========== */}
        {user_info.education.map((edu, index) => {
          return (
            <div key={index}>
              {/* =========== DURATION =========== */}
              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                  {edu.duration}
                </h3>
              </div>

              <div className="flex gap-x-3 relative group rounded-lg">
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                  </div>
                </div>

                <div className="grow p-2 pb-8">
                  {/* =========== IMAGE AND SCHOOL NAME =========== */}
                  <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                    <img className="w-9 h-9 rounded-full" src={edu.image} alt="School Logo" />
                    <div className="leading-5">
                      {edu.school}
                      {/* =========== DEGREE =========== */}
                      <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                  </h3>
                  
                </div>
              </div>
            </div>
          );
        })}

        {/* =========== CERTIFICATES TITLE =========== */}
        <h4 className="text-xl dark:text-white mt-6 font-bold flex gap-2 items-center">
          <PiCertificateFill className="text-2xl text-red-800 dark:text-red-500" />
          Certificates
        </h4>

        <div
          data-hs-carousel='{"loadingClasses": "opacity-0"}'
          className="relative mt-4"
        >
          <div className="hs-carousel relative overflow-hidden w-full h-48 bg-white dark:bg-gray-800 rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              
              
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
          
          {/* =========== CAROUSEL PAGINATION =========== */}
          
        </div>
      </div>
      
      {/* =========== EXPERIENCE =========== */}
      <div className="w-full">
        {/* =========== EXPERIENCE TITLE =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaBuildingUser className="text-2xl text-red-800 dark:text-red-500" />
          Experience
        </h4>

        <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
         
          
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;
