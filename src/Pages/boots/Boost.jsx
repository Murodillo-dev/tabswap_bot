import React from 'react'
import './Boost.css'

const Boost = () => {
  return (
    <div className='boost'>
      <div className="coinCount">
        <h1 className="share">Your Share balance</h1>

        <div className="counter">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.5781" cy="23.9693" rx="23.5781" ry="23.2154" fill="#EFC269" />
            <path
              d="M44.8423 23.9693C44.8423 35.5051 35.3299 44.871 23.5779 44.871C11.8259 44.871 2.31348 35.5051 2.31348 23.9693C2.31348 12.4335 11.8259 3.06763 23.5779 3.06763C35.3299 3.06763 44.8423 12.4335 44.8423 23.9693Z"
              fill="url(#paint0_linear_438_5)" stroke="url(#paint1_linear_438_5)" />
            <defs>
              <linearGradient id="paint0_linear_438_5" x1="10.217" y1="7.82736" x2="40.2035" y2="40.5949"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#E2BC62" />
                <stop offset="0.5" stopColor="#FBD772" />
                <stop offset="1" stopColor="#E2BC62" />
              </linearGradient>
              <linearGradient id="paint1_linear_438_5" x1="7.85915" y1="7.16234" x2="32.8278" y2="45.371"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#AC8130" />
                <stop offset="1" stopColor="#F7E18B" />
              </linearGradient>
            </defs>
          </svg>

          <span className="coinCount">50</span>
        </div>

        <div className="status">
          <img src="assets/bronze.png" alt="" />
          <span className="type">Bronze</span>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="join">
          <div className="channel">

            <div className="group">
              <div className="groupLeft">
                <div className="tappingLeft">
                  <svg width="20" height="25" viewBox="0 0 20 26" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.832 12.969C18.56 12.322 18.251 11.589 17.949 10.684C17.159 8.315 19.683 5.731 19.707 5.707L18.293 4.293C18.153 4.433 14.87 7.771 16.051 11.316C16.377 12.294 16.703 13.066 16.989 13.746C17.6557 15.0648 18.0021 16.5222 18 18C17.8828 19.1912 17.4255 20.3235 16.6826 21.262C15.9396 22.2005 14.9425 22.9055 13.81 23.293C14.1678 21.8907 14.1624 20.4203 13.7945 19.0207C13.4266 17.621 12.7081 16.3381 11.707 15.293L10.663 14.249L10.081 15.606C8.245 19.89 6.06 21.76 4.775 22.54C3.98593 22.0571 3.32287 21.3937 2.84041 20.6044C2.35795 19.8151 2.06991 18.9224 2 18C2.06836 16.7411 2.38404 15.5079 2.929 14.371C3.57545 13.0005 3.93968 11.5141 4 10V8.222C4.874 8.582 6 9.525 6 12V14.604L7.743 12.669C10.855 9.215 10.206 5.102 8.949 2.361C9.90449 2.6795 10.725 3.31027 11.2784 4.15176C11.8319 4.99325 12.086 5.99651 12 7H14C14 1.463 9.421 0 7 0H5L6.2 1.599C6.337 1.784 9.062 5.526 7.553 9.287C7.21756 8.34164 6.60228 7.5208 5.78897 6.93365C4.97567 6.34649 4.00289 6.02084 3 6H2V10C1.93164 11.2589 1.61596 12.4921 1.071 13.629C0.424547 14.9995 0.0603247 16.4859 0 18C0 21.848 3.823 26 10 26C16.177 26 20 21.848 20 18C20.0007 16.2557 19.6011 14.5346 18.832 12.969ZM6.835 23.526C8.67964 21.999 10.1698 20.0888 11.202 17.928C11.7535 18.8176 12.0668 19.8341 12.1119 20.8799C12.1569 21.9256 11.932 22.9653 11.459 23.899C10.9754 23.965 10.488 23.9987 10 24C8.92675 24.0079 7.85886 23.8479 6.835 23.526Z"
                      fill="#FBD772" />
                  </svg>
                </div>

                <div className="tappingRight">
                  <h1>Tapping Guru</h1>
                  <label >
                    <span>3</span>/<span>3</span>
                  </label>
                </div>
              </div>

              <div className="groupRight">
                <div className="tappingLeft">
                  <svg width="21" height="25" viewBox="0 0 21 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17.1425H9.64679L6.29277 30L21 12.8575H11.3532L14.6999 0L0 17.1425Z"
                      fill="#FBD772" />
                  </svg>
                </div>
                <div className="tappingRight">
                  <h1>Tapping Guru</h1>
                  <label >
                    <span>3</span>/<span>3</span>
                  </label>
                </div>
              </div>
            </div>

            <h1 className="booster">Booster</h1>

            <a href="" className="joinType multitap">

              <div className="parent">
                <div className="left">
                  <svg width="30" height="38" viewBox="0 0 30 38" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.5755 8.44444C10.5755 7.88454 10.8029 7.34757 11.2077 6.95166C11.6124 6.55575 12.1614 6.33333 12.7338 6.33333C13.3062 6.33333 13.8552 6.55575 14.2599 6.95166C14.6647 7.34757 14.8921 7.88454 14.8921 8.44444V17.8811L17.5036 18.1556L28.1655 22.7789C29.3094 23.2856 30 24.4044 30 25.6289V34.8333C29.9353 36.5644 28.5324 37.9367 26.7626 38H12.7338C11.9137 38 11.1367 37.6833 10.5755 37.0922L0 28.2256L1.59712 26.6C2.00719 26.1567 2.58993 25.9244 3.19424 25.9244H3.66907L10.5755 29.5556V8.44444ZM12.7338 0C15.0235 0 17.2193 0.88968 18.8383 2.47332C20.4574 4.05696 21.3669 6.20484 21.3669 8.44444C21.3669 11.6111 19.6403 14.2922 17.0504 15.7489V13.1733C18.3669 12.0122 19.2086 10.3233 19.2086 8.44444C19.2086 6.76474 18.5265 5.15383 17.3122 3.9661C16.0979 2.77837 14.451 2.11111 12.7338 2.11111C11.0166 2.11111 9.36969 2.77837 8.15542 3.9661C6.94116 5.15383 6.25899 6.76474 6.25899 8.44444C6.25899 10.3233 7.10072 12.0122 8.41727 13.1733V15.7489C5.82734 14.2922 4.10072 11.6111 4.10072 8.44444C4.10072 6.20484 5.01027 4.05696 6.62929 2.47332C8.24831 0.88968 10.4442 0 12.7338 0Z"
                      fill="#FBD772" />
                  </svg>
                </div>

                <div className="center">
                  <h1>Multitap</h1>
                  <label>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="6.4115" cy="6.31286" rx="6.4115" ry="6.31286" fill="#EFC269" />
                      <path
                        d="M11.8298 6.31283C11.8298 9.24292 9.41188 11.6325 6.41147 11.6325C3.41107 11.6325 0.993164 9.24292 0.993164 6.31283C0.993164 3.38275 3.41107 0.993164 6.41147 0.993164C9.41188 0.993164 11.8298 3.38275 11.8298 6.31283Z"
                        fill="url(#paint0_linear_438_131)" stroke="url(#paint1_linear_438_131)" />
                      <defs>
                        <linearGradient id="paint0_linear_438_131" x1="2.77829" y1="1.92342"
                          x2="10.9324" y2="10.8338" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#E2BC62" />
                          <stop offset="0.5" stopColor="#FBD772" />
                          <stop offset="1" stopColor="#E2BC62" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_438_131" x1="2.13714" y1="1.74258"
                          x2="8.92675" y2="12.1325" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#AC8130" />
                          <stop offset="1" stopColor="#F7E18B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="coins">500</span>
                    <div className="seperate"></div>
                    <span className="level">Level 1</span>
                  </label>
                </div>
              </div>

              <div className="right">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </a>

            <a href="" className="joinType">

              <div className="parent">
                <div className="left">
                  <svg width="30" height="38" viewBox="0 0 18 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 2V0.62C13.0027 0.541196 12.9898 0.462638 12.9621 0.388819C12.9344 0.314999 12.8924 0.247365 12.8385 0.189784C12.7846 0.132202 12.72 0.0858029 12.6481 0.0532384C12.5763 0.0206739 12.4988 0.00258307 12.42 0H5.58C5.50119 0.00258307 5.42367 0.0206739 5.35186 0.0532384C5.28005 0.0858029 5.21536 0.132202 5.16149 0.189784C5.10763 0.247365 5.06564 0.314999 5.03793 0.388819C5.01022 0.462638 4.99733 0.541196 5 0.62V2H1C0.730205 2.02232 0.47837 2.14424 0.293523 2.34203C0.108676 2.53982 0.00404539 2.79931 0 3.07V31.07C0.0177459 31.3229 0.130887 31.5596 0.316535 31.7323C0.502183 31.9049 0.746478 32.0006 1 32H17C17.2551 32.0005 17.5008 31.9034 17.6867 31.7286C17.8726 31.5539 17.9847 31.3147 18 31.06V3.06C17.9935 2.79105 17.8878 2.53401 17.7032 2.33832C17.5186 2.14264 17.2681 2.02213 17 2H13ZM11.26 23.44C11.4019 23.7251 11.4247 24.0549 11.3234 24.3568C11.2222 24.6588 11.0051 24.9081 10.72 25.05C10.4349 25.1919 10.1051 25.2147 9.80316 25.1134C9.50123 25.0122 9.25189 24.7951 9.11 24.51L3.65 13.56L9.65 14.56L7.36 10.56C7.28121 10.4234 7.23009 10.2727 7.20955 10.1163C7.18902 9.96001 7.19949 9.80116 7.24035 9.64887C7.2812 9.49658 7.35166 9.35384 7.44768 9.22878C7.54371 9.10371 7.66342 8.99879 7.8 8.92C7.93657 8.84121 8.08733 8.79009 8.24366 8.76956C8.39999 8.74902 8.55884 8.75949 8.71113 8.80034C8.86341 8.8412 9.00617 8.91166 9.13123 9.00768C9.25629 9.10371 9.36121 9.22342 9.44 9.36L14.27 17.73L7.9 16.7L11.26 23.44Z"
                      fill="#FBD772" />
                  </svg>
                </div>

                <div className="center">
                  <h1>Energy Limit</h1>
                  <label>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="6.4115" cy="6.31286" rx="6.4115" ry="6.31286" fill="#EFC269" />
                      <path
                        d="M11.8298 6.31283C11.8298 9.24292 9.41188 11.6325 6.41147 11.6325C3.41107 11.6325 0.993164 9.24292 0.993164 6.31283C0.993164 3.38275 3.41107 0.993164 6.41147 0.993164C9.41188 0.993164 11.8298 3.38275 11.8298 6.31283Z"
                        fill="url(#paint0_linear_438_131)" stroke="url(#paint1_linear_438_131)" />
                      <defs>
                        <linearGradient id="paint0_linear_438_131" x1="2.77829" y1="1.92342"
                          x2="10.9324" y2="10.8338" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#E2BC62" />
                          <stop offset="0.5" stopColor="#FBD772" />
                          <stop offset="1" stopColor="#E2BC62" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_438_131" x1="2.13714" y1="1.74258"
                          x2="8.92675" y2="12.1325" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#AC8130" />
                          <stop offset="1" stopColor="#F7E18B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>500</span>
                    <div className="seperate"></div>
                    <span className="level">Level 1</span>
                  </label>
                </div>
              </div>

              <div className="right">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </a>

            <a href="" className="joinType">
              <div className="parent">
                <div className="left">
                  <svg width="31" height="44" viewBox="0 0 31 44" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_472_98)">
                      <path
                        d="M0 25.1423H14.3603L9.36747 44L31.2608 18.8577H16.9005L21.8824 0L0 25.1423Z"
                        fill="#FBD772" />
                    </g>
                    <defs>
                      <clipPath id="clip0_472_98">
                        <rect width="31" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="center">
                  <h1>Recharging Speed</h1>
                  <label>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="6.4115" cy="6.31286" rx="6.4115" ry="6.31286" fill="#EFC269" />
                      <path
                        d="M11.8298 6.31283C11.8298 9.24292 9.41188 11.6325 6.41147 11.6325C3.41107 11.6325 0.993164 9.24292 0.993164 6.31283C0.993164 3.38275 3.41107 0.993164 6.41147 0.993164C9.41188 0.993164 11.8298 3.38275 11.8298 6.31283Z"
                        fill="url(#paint0_linear_438_131)" stroke="url(#paint1_linear_438_131)" />
                      <defs>
                        <linearGradient id="paint0_linear_438_131" x1="2.77829" y1="1.92342"
                          x2="10.9324" y2="10.8338" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#E2BC62" />
                          <stop offset="0.5" stopColor="#FBD772" />
                          <stop offset="1" stopColor="#E2BC62" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_438_131" x1="2.13714" y1="1.74258"
                          x2="8.92675" y2="12.1325" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#AC8130" />
                          <stop offset="1" stopColor="#F7E18B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>500</span>
                    <div className="seperate"></div>
                    <span className="level">Level 1</span>
                  </label>
                </div>
              </div>

              <div className="right">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boost