import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Boots from "./Pages/boots/Boost";
import Earn from "./Pages/earn/Earn";
import Frens from "./Pages/frens/Frens";
import Stats from "./Pages/stats/Stats";
import Tasks from "./Pages/tasks/Tasks";

const App = () => {
  const [a, setA] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".a");
    setA(navLinks);

    navLinks.forEach((element) => {
      element.addEventListener("click", (event) => {
        navLinks.forEach((el) => {
          el.classList.remove("selected");
          el.style.backgroundColor = ""; // Reset background color
          el.querySelector("span").classList.remove("selected"); // Ensure span is not selected
          el.querySelector("svg").classList.remove("selected"); // Ensure svg is not selected
        });

        event.currentTarget.classList.add("selected");
        event.currentTarget.style.backgroundColor = "#425BA5"; // Change the background only for the clicked element

        // Prevent background color from affecting span and svg
        const span = event.currentTarget.querySelector("span");
        const svg = event.currentTarget.querySelector("svg");

        if (span) {
          span.style.backgroundColor = ""; // Keep span's background color unaffected
        }

        if (svg) {
          svg.style.backgroundColor = ""; // Keep svg's background color unaffected
        }
      });
    });

    setActive(true);
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/frens/:id" element={<Frens />} />
          <Route path="/tasks/:id" element={<Tasks />} />
          <Route path="/telegram-user/:id" element={<Earn />} />
          <Route path="/boost/:id" element={<Boots />} />
          <Route path="/stats/:id" element={<Stats />} />
        </Routes>

        <div className="category">
          <NavLink className="a" to="/frens/:idns">
            <svg
              width="29"
              height="19"
              viewBox="0 0 29 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0367 12.4546C14.2513 11.646 15.1734 10.468 15.6667 9.09477C16.1601 7.72154 16.1983 6.22601 15.776 4.82933C15.3536 3.43266 14.4929 2.20899 13.3213 1.33928C12.1497 0.469574 10.7292 0 9.27009 0C7.81094 0 6.39053 0.469574 5.21889 1.33928C4.04726 2.20899 3.18662 3.43266 2.76423 4.82933C2.34183 6.22601 2.38013 7.72154 2.87344 9.09477C3.36675 10.468 4.28889 11.646 5.50349 12.4546C3.30639 13.2644 1.43002 14.7629 0.154349 16.7265C0.0873042 16.8261 0.0407349 16.9381 0.0173479 17.0559C-0.00603912 17.1737 -0.00577727 17.295 0.0181182 17.4127C0.0420136 17.5304 0.089066 17.6422 0.15654 17.7415C0.224015 17.8409 0.310565 17.9258 0.41116 17.9914C0.511756 18.057 0.624389 18.102 0.742514 18.1237C0.860639 18.1454 0.981899 18.1434 1.09925 18.1178C1.21659 18.0923 1.32768 18.0436 1.42606 17.9747C1.52445 17.9058 1.60815 17.8181 1.67232 17.7165C2.49518 16.451 3.62116 15.411 4.948 14.691C6.27484 13.9711 7.76051 13.594 9.27009 13.594C10.7797 13.594 12.2653 13.9711 13.5922 14.691C14.919 15.411 16.045 16.451 16.8679 17.7165C17.0008 17.9141 17.2061 18.0514 17.4395 18.0988C17.6728 18.1462 17.9154 18.0998 18.1149 17.9697C18.3143 17.8396 18.4545 17.6363 18.5052 17.4036C18.5559 17.171 18.513 16.9277 18.3858 16.7265C17.1102 14.7629 15.2338 13.2644 13.0367 12.4546ZM4.28572 6.79963C4.28572 5.81382 4.57804 4.85014 5.12573 4.03046C5.67342 3.21079 6.45188 2.57193 7.36265 2.19467C8.27343 1.81742 9.27562 1.71871 10.2425 1.91103C11.2094 2.10335 12.0975 2.57807 12.7946 3.27515C13.4917 3.97222 13.9664 4.86035 14.1587 5.82723C14.351 6.7941 14.2523 7.7963 13.8751 8.70707C13.4978 9.61785 12.8589 10.3963 12.0393 10.944C11.2196 11.4917 10.2559 11.784 9.27009 11.784C7.94861 11.7825 6.68169 11.2569 5.74726 10.3225C4.81283 9.38803 4.28722 8.12111 4.28572 6.79963ZM28.0906 17.9805C27.8893 18.1118 27.6441 18.1577 27.409 18.1082C27.1738 18.0587 26.9679 17.9178 26.8366 17.7165C26.0147 16.4502 24.8889 15.4097 23.5618 14.6901C22.2347 13.9704 20.7485 13.5945 19.2388 13.5965C18.9985 13.5965 18.768 13.501 18.598 13.3311C18.4281 13.1611 18.3326 12.9306 18.3326 12.6903C18.3326 12.4499 18.4281 12.2194 18.598 12.0494C18.768 11.8795 18.9985 11.784 19.2388 11.784C19.9729 11.7833 20.6977 11.6205 21.3615 11.3072C22.0253 10.9939 22.6117 10.5379 23.0789 9.9717C23.546 9.40551 23.8823 8.74312 24.0638 8.03188C24.2453 7.32064 24.2674 6.57809 24.1286 5.8573C23.9899 5.13651 23.6936 4.45527 23.261 3.86225C22.8284 3.26922 22.2702 2.77906 21.6263 2.42679C20.9823 2.07451 20.2685 1.86881 19.5358 1.82439C18.8031 1.77998 18.0696 1.89793 17.3878 2.16983C17.2767 2.21788 17.157 2.24317 17.0359 2.2442C16.9148 2.24522 16.7947 2.22196 16.6827 2.17579C16.5708 2.12962 16.4692 2.06147 16.384 1.97538C16.2988 1.88929 16.2318 1.787 16.1868 1.67455C16.1418 1.5621 16.1198 1.44178 16.1221 1.32069C16.1244 1.19961 16.151 1.08021 16.2002 0.969559C16.2495 0.858909 16.3204 0.759249 16.4088 0.676469C16.4972 0.59369 16.6013 0.529469 16.7149 0.487601C18.2753 -0.134708 20.0109 -0.157102 21.5869 0.424738C23.1628 1.00658 24.4674 2.15143 25.2491 3.63842C26.0307 5.12542 26.234 6.84921 25.8197 8.47723C25.4054 10.1053 24.4028 11.5222 23.0054 12.4546C25.2025 13.2644 27.0789 14.7629 28.3546 16.7265C28.4859 16.9278 28.5318 17.173 28.4823 17.4081C28.4328 17.6433 28.2919 17.8492 28.0906 17.9805Z"
                fill="#FBD772"
              />
            </svg>
            <span>Frens</span>
          </NavLink>

          <NavLink className="a" to="/tasks/:id">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_438_25)">
                <path
                  d="M10.4737 0.699957C5.11209 0.699957 0.764648 5.28726 0.764648 10.9447C0.764648 16.6021 5.11209 21.1894 10.4737 21.1894C15.8353 21.1894 20.1801 16.6021 20.1801 10.9447C20.1826 9.58844 19.928 8.2454 19.4313 6.99456L16.6993 9.87726C16.7522 10.2256 16.7846 10.5811 16.7846 10.9447C16.7846 12.2614 16.4146 13.5487 15.7213 14.6436C15.028 15.7385 14.0426 16.5919 12.8897 17.0959C11.7368 17.5999 10.4681 17.7318 9.24413 17.4751C8.02014 17.2183 6.89579 16.5843 6.01325 15.6534C5.1307 14.7224 4.52959 13.5362 4.28593 12.2447C4.04226 10.9533 4.16698 9.61458 4.64431 8.39792C5.12164 7.18126 5.93015 6.14127 6.96761 5.40944C8.00507 4.67761 9.22489 4.28681 10.4728 4.28646C11.7514 4.28646 12.937 4.68966 13.9306 5.37906L16.3675 2.80776C14.6769 1.43865 12.6048 0.69761 10.4737 0.699957ZM18.725 1.38036C18.476 1.38036 18.2278 1.48116 18.0384 1.68096C15.5063 4.35036 12.9759 7.02096 10.4472 9.69276L8.94947 8.11326C8.7672 7.92145 8.52028 7.81374 8.26286 7.81374C8.00543 7.81374 7.75851 7.92145 7.57624 8.11326L6.06227 9.70896C5.88049 9.90129 5.77841 10.1618 5.77841 10.4335C5.77841 10.7051 5.88049 10.9656 6.06227 11.158L9.61562 14.9047C9.72815 15.0238 9.86187 15.1184 10.0091 15.1829C10.1564 15.2475 10.3142 15.2807 10.4737 15.2807C10.6331 15.2807 10.791 15.2475 10.9382 15.1829C11.0855 15.1184 11.2192 15.0238 11.3317 14.9047L20.9504 4.75356C21.0408 4.65856 21.1125 4.54566 21.1615 4.42133C21.2104 4.297 21.2356 4.16369 21.2356 4.02906C21.2356 3.89442 21.2104 3.76112 21.1615 3.63679C21.1125 3.51246 21.0408 3.39955 20.9504 3.30456L19.4108 1.68096C19.2289 1.48897 18.9823 1.38088 18.725 1.38036Z"
                  fill="#FBD772"
                />
              </g>
              <defs>
                <clipPath id="clip0_438_25">
                  <rect
                    width="20.4706"
                    height="21.6"
                    fill="white"
                    transform="translate(0.764648 0.699951)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>Tasks</span>
          </NavLink>

          <NavLink
            className="a"
            to="/telegram-user/:id"
            style={
              active
                ? { backgroundColor: "#425BA5" }
                : { backgroundColor: "transparent" }
            }
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="11.2813"
                cy="11.0308"
                rx="10.7188"
                ry="10.9693"
                fill="#EFC269"
              />
              <path
                d="M20.6753 11.0309C20.6753 16.35 16.4591 20.6432 11.281 20.6432C6.1029 20.6432 1.88672 16.35 1.88672 11.0309C1.88672 5.71183 6.1029 1.41858 11.281 1.41858C16.4591 1.41858 20.6753 5.71183 20.6753 11.0309Z"
                fill="url(#paint0_linear_438_30)"
                stroke="url(#paint1_linear_438_30)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_438_30"
                  x1="5.20701"
                  y1="3.40381"
                  x2="19.4136"
                  y2="18.3401"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E2BC62" />
                  <stop offset="0.5" stopColor="#FBD772" />
                  <stop offset="1" stopColor="#E2BC62" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_438_30"
                  x1="4.13513"
                  y1="3.08958"
                  x2="16.1096"
                  y2="20.7197"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AC8130" />
                  <stop offset="1" stopColor="#F7E18B" />
                </linearGradient>
              </defs>
            </svg>

            <span style={{ width: "30px", textAlign: "center" }}>Earn</span>
          </NavLink>

          <NavLink className="a" to="/boost/:id">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.37869 13.4933L6.46202 12.5766L3.62036 13.4841H3.52869C3.48405 13.4866 3.43938 13.4798 3.39755 13.464C3.35571 13.4482 3.31764 13.4238 3.28577 13.3925L2.62119 12.7371C2.56751 12.686 2.53315 12.6179 2.52396 12.5444C2.51477 12.4709 2.53131 12.3964 2.57077 12.3337L3.34536 11C3.82513 10.1789 4.49445 9.48462 5.2974 8.97511C6.10034 8.46559 7.01357 8.15567 7.96077 8.07123L9.10202 7.9704M9.10202 7.9704C9.76508 7.18207 10.3762 6.50679 10.9354 5.94457C11.9963 4.82075 13.2628 3.9106 14.6662 3.26332C16.0966 2.72827 17.6177 2.47761 19.1441 2.5254C19.2364 2.52668 19.3247 2.56268 19.3916 2.62623C19.4233 2.65538 19.4487 2.6908 19.466 2.73025C19.4834 2.76969 19.4924 2.81231 19.4924 2.8554C19.5234 4.38636 19.2508 5.90828 18.6904 7.33332C18.0597 8.74082 17.1597 10.0113 16.0412 11.0733C15.4774 11.6416 14.7991 12.2512 14.0154 12.9066L13.9145 14.0433C13.8323 14.99 13.5248 15.9034 13.0177 16.7071C12.5106 17.5108 11.8186 18.1815 10.9995 18.6633L9.67494 19.4379C9.62256 19.4651 9.56438 19.4792 9.50536 19.4791C9.41765 19.4773 9.33334 19.4449 9.26702 19.3875L8.60244 18.7183C8.55953 18.6773 8.52904 18.625 8.51445 18.5675C8.49986 18.5099 8.50176 18.4494 8.51994 18.3929L9.40452 15.5191M9.10202 7.9704L6.48494 12.5996M9.40452 15.5191L8.51536 14.63M9.40452 15.5191L14.0337 12.9066M17.1504 6.73748C17.1516 6.23989 16.9554 5.76212 16.6048 5.40898C16.2543 5.05584 15.7779 4.85616 15.2804 4.85373C15.0255 4.84115 14.7707 4.88049 14.5315 4.96936C14.2922 5.05823 14.0736 5.19478 13.8887 5.37073C13.7039 5.54668 13.5567 5.75835 13.4561 5.9929C13.3556 6.22745 13.3037 6.47999 13.3037 6.73519C13.3037 6.99039 13.3556 7.24293 13.4561 7.47748C13.5567 7.71203 13.7039 7.9237 13.8887 8.09965C14.0736 8.2756 14.2922 8.41215 14.5315 8.50102C14.7707 8.5899 15.0255 8.62923 15.2804 8.61665C15.7743 8.61688 16.2485 8.42258 16.6004 8.07582C16.7772 7.90133 16.9167 7.69272 17.0105 7.46266C17.1043 7.2326 17.1503 6.98588 17.1458 6.73748H17.1504Z"
                stroke="#FBD772"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.95801 16.0416C7.79134 15.7025 11.0455 12.65 11.4259 10.5737C9.33592 10.9725 6.28342 14.2083 5.95801 16.0416Z"
                stroke="#FBD772"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Boost</span>
          </NavLink>

          <NavLink className="a" to="/stats/:id">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6667 1H5C3.75733 1 3.136 1 2.64533 1.20267C2.32182 1.33683 2.0279 1.53341 1.78037 1.78117C1.53284 2.02893 1.33653 2.32303 1.20267 2.64667C1 3.136 1 3.75733 1 5C2.06087 5 3.07828 5.42143 3.82843 6.17157C4.57857 6.92172 5 7.93913 5 9C5 10.0609 4.57857 11.0783 3.82843 11.8284C3.07828 12.5786 2.06087 13 1 13C1 14.2427 1 14.864 1.20267 15.3533C1.33653 15.677 1.53284 15.9711 1.78037 16.2188C2.0279 16.4666 2.32182 16.6632 2.64533 16.7973C3.136 17 3.75733 17 5 17H15.6667M15.6667 1H21C22.2427 1 22.864 1 23.3533 1.20267C23.6771 1.33668 23.9713 1.53319 24.219 1.78096C24.4668 2.02874 24.6633 2.32291 24.7973 2.64667C25 3.136 25 3.75733 25 5C23.9391 5 22.9217 5.42143 22.1716 6.17157C21.4214 6.92172 21 7.93913 21 9C21 10.0609 21.4214 11.0783 22.1716 11.8284C22.9217 12.5786 23.9391 13 25 13C25 14.2427 25 14.864 24.7973 15.3533C24.6633 15.6771 24.4668 15.9713 24.219 16.219C23.9713 16.4668 23.6771 16.6633 23.3533 16.7973C22.864 17 22.2427 17 21 17H15.6667M15.6667 1V17"
                stroke="#FBD772"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Bank</span>
          </NavLink>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
