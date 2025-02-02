import { motion, useTransform, useScroll } from "framer-motion";


interface CustomScrollbarProps {
  barColor?: string;
  ellipseColor?: string;
  ellipseColor2?: string;
  ellipseColor3?: string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ barColor = "#333", ellipseColor = "#8A2BE2", ellipseColor2= "#8A2BE2", ellipseColor3 = "#8A2BE2" }) => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 400]);

  return (
    <motion.div
      className="h-full flex justify-center items-center px-8"
      style={{ position: "fixed", top: 0, right: 0 }}
    >
      <motion.div
        className="scroll-bar  relative"
        style={{
          width: "2px",
          height: "400px",
          backgroundColor: barColor,
          borderRadius: "4px",
        }}
      >
        <div className="h-[400px]  w-[30px] text-center relative">
          <motion.div
            className="flex flex-col w-[2px]  justify-center items-center relative  -translate-x-1/2"
            style={{
              width: "100%",
              height: yRange,
              // objectFit: "",
              borderRadius: "4px",
            }}
          >
            <svg
              className="absolute z-[70] w-full h-[103.5%] origin-top js-svg-progress-bar"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 347"
            >
              <path
                stroke={ellipseColor}
                stroke-width="0.5"
                d="M12.07 0.851L12.07 340.851"
              ></path>
              <g
                filter="url(#filter0_f_1881_22079)"
                opacity="0.73"
              >
                <ellipse
                  cx="11.82"
                  cy="331.619"
                  fill="url(#paint0_linear_1881_22079)"
                  rx="2"
                  ry="9.232"
                  transform="rotate(-180 11.82 331.619)"
                ></ellipse>
              </g>
              <g
                filter="url(#filter1_f_1881_22079)"
              >
                <ellipse
                  cx="11.82"
                  cy="338.484"
                  fill="url(#paint1_linear_1881_22079)"
                  rx="2"
                  ry="2.367"
                  transform="rotate(-180 11.82 338.484)"
                ></ellipse>
              </g>
              <g
                filter="url(#filter2_f_1881_22079)"
                opacity="0.21"
              >
                <ellipse
                  cx="11.82"
                  cy="337.537"
                  fill="url(#paint2_linear_1881_22079)"
                  rx="5"
                  ry="3.314"
                  transform="rotate(-180 11.82 337.537)"
                ></ellipse>
              </g>
              <g
                filter="url(#filter3_f_1881_22079)"
              >
                <ellipse
                  cx="11.82"
                  cy="339.431"
                  fill="url(#paint3_linear_1881_22079)"
                  rx="1"
                  ry="1.42"
                  transform="rotate(-180 11.82 339.431)"
                ></ellipse>
              </g>
              <path
                stroke="url(#paint4_linear_1881_22079)"
                stroke-width="0.5"
                d="M12.07 336.827L12.07 340.851"
              ></path>
              <defs>
                <filter
                  id="filter0_f_1881_22079"
                  width="16"
                  height="30.464"
                  x="3.82"
                  y="316.387"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1881_22079"
                    stdDeviation="3"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_1881_22079"
                  width="8"
                  height="8.734"
                  x="7.82"
                  y="334.116"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1881_22079"
                    stdDeviation="1"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter2_f_1881_22079"
                  width="22"
                  height="18.628"
                  x="0.82"
                  y="328.223"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1881_22079"
                    stdDeviation="3"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter3_f_1881_22079"
                  width="10"
                  height="10.841"
                  x="6.82"
                  y="334.01"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1881_22079"
                    stdDeviation="2"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_1881_22079"
                  x1="11.82"
                  x2="11.82"
                  y1="322.387"
                  y2="340.851"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color={ellipseColor}></stop>
                  <stop offset="0.552" stop-color={ellipseColor2} stop-opacity="0.37"></stop>
                  <stop offset="1" stop-color={ellipseColor3} stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1881_22079"
                  x1="11.82"
                  x2="11.82"
                  y1="336.116"
                  y2="340.851"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color={ellipseColor}></stop>
                  <stop offset="0.552" stop-color={ellipseColor2} stop-opacity="0.37"></stop>
                  <stop offset="1" stop-color={ellipseColor3} stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1881_22079"
                  x1="11.82"
                  x2="11.82"
                  y1="334.223"
                  y2="340.851"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color={ellipseColor}></stop>
                  <stop offset="1" stop-color={ellipseColor} stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1881_22079"
                  x1="11.82"
                  x2="11.82"
                  y1="338.01"
                  y2="340.851"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color={ellipseColor}></stop>
                  <stop offset="1" stop-color={ellipseColor} stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1881_22079"
                  x1="11.32"
                  x2="11.32"
                  y1="340.733"
                  y2="336.59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color={ellipseColor}></stop>
                  <stop offset="1" stop-color={ellipseColor} stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>


          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}


export default CustomScrollbar;
