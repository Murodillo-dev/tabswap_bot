import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./Earn.css";

const url = "https://49bb-95-214-211-55.ngrok-free.app";

//mana keldim

const Earn = () => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [add_coin, setAddCoin] = useState(1);
  const [loading, setLoading] = useState(true);
  const [charge, setCharge] = useState(100); // or any default value
  const [xato, setXato] = useState("");
  const [user, setUser] = useState("");
  const [tanga, setTanga] = useState([]);

  useEffect(() => {
    // Telegram WebApp ob'ektini olish
    const tg = window.Telegram.WebApp;

    if (window.Telegram && window.Telegram.WebApp) {
      // Foydalanuvchi ma'lumotlarini olish
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user;
        setUserId(user.id); // userId ni o'rnatish
        setUsername(user.username); // username ni o'rnatish
      } else {
        setXato("Telegram WebApp ma'lumotlarini olishning imkoni bo'lmadi.");
      }
    } else {
      // Telegram orqali kirmagan bo'lsa
      setXato("Telegram orqali kirilmadi.");
    }

    if (userId) {
      // userId mavjud bo'lsa, API chaqiramiz
      axios
        .get(`${url}api/friends/${userId}`)
        .then((response) => {
          if (
            response.status === 200 &&
            response.headers["content-type"].includes("application/json")
          ) {
            const userData = response.data;
            console.log("Foydalanuvchi ma'lumotlari:", userData); // Ma'lumotlarni konsolda tekshirish
            setUser(userData.user); // Foydalanuvchi ma'lumotlarini o'rnatish
            setTanga(userData.coin); // Foydalanuvchi tangalarini o'rnatish
            setAddCoin(userData.add_coin); // Qo'shiladigan tangalar soni
            setCharge(userData.coin); // Yana bir qiymatni o'rnatish
          } else {
            console.error("Unexpected response format:", response);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false); // Yozuvchi yuklanayotgan holatini tugatish
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://62e154177ab8f7dbfe74951149185f98.serveo.net/api/friends/1230394567/"
      )
      .then((a) => {
        console.log(a);
      });
  }, []);

  //ekran bosilganda
  const handleTouchEnd = async (event) => {
    setTouchPosition({
      x: event.changedTouches[0].clientX - 100,
      y: event.changedTouches[0].clientY - 300,
    });

    let effect = document.querySelector(".coinClick h1");
    let btn = document.querySelector(".coinClick button");
    effect.classList.remove("effect");
    btn.classList.remove("scaleEffect");

    setTimeout(() => {
      effect.classList.add("effect");
      btn.classList.add("scaleEffect");
    }, 10);

    if (navigator.vibrate) {
      navigator.vibrate(40);
    }

    setCount((prevCount) => prevCount + add_coin);
    setCharge(charge - add_coin);
  };

  return (
    <div className="earn">
      <div className="coinCount">
        <div className="counter">
          <div className="include">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.5781"
                cy="23.9693"
                rx="23.5781"
                ry="23.2154"
                fill="#EFC269"
              />
              <path
                d="M44.8423 23.9693C44.8423 35.5051 35.3299 44.871 23.5779 44.871C11.8259 44.871 2.31348 35.5051 2.31348 23.9693C2.31348 12.4335 11.8259 3.06763 23.5779 3.06763C35.3299 3.06763 44.8423 12.4335 44.8423 23.9693Z"
                fill="url(#paint0_linear_438_5)"
                stroke="url(#paint1_linear_438_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_438_5"
                  x1="10.217"
                  y1="7.82736"
                  x2="40.2035"
                  y2="40.5949"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E2BC62" />
                  <stop offset="0.5" stopColor="#FBD772" />
                  <stop offset="1" stopColor="#E2BC62" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_438_5"
                  x1="7.85915"
                  y1="7.16234"
                  x2="32.8278"
                  y2="45.371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AC8130" />
                  <stop offset="1" stopColor="#F7E18B" />
                </linearGradient>
              </defs>
            </svg>

            <span className="coinCount">{count > 0 ? count : 0}</span>
          </div>
        </div>

        <div className="status">
          <img src="assets/bronze.png" alt="" />
          <span className="type">Bronze</span>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="coinClick">
        <button onTouchEnd={handleTouchEnd}>
          <svg
            width="249"
            height="246"
            viewBox="0 0 249 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="124.422"
              cy="122.508"
              rx="124.422"
              ry="122.508"
              fill="#EFC269"
            />
            <path
              d="M238.771 122.507C238.771 184.597 187.583 234.944 124.42 234.944C61.258 234.944 10.0693 184.597 10.0693 122.507C10.0693 60.4181 61.258 10.0706 124.42 10.0706C187.583 10.0706 238.771 60.4181 238.771 122.507Z"
              fill="url(#paint0_linear_438_46)"
              stroke="url(#paint1_linear_438_46)"
            />
            <path
              d="M116.104 172H114.568C111.155 172 108.296 171.744 105.992 171.232C103.773 170.72 101.811 169.696 100.104 168.16C98.4827 166.539 97.2027 164.747 96.264 162.784C95.4107 160.821 94.728 157.877 94.216 153.952C93.448 148.064 93.064 140.171 93.064 130.272C93.064 120.288 93.1067 113.248 93.192 109.152C93.3627 105.056 93.704 101.088 94.216 97.248C94.728 93.3227 95.4107 90.4213 96.264 88.544C97.2027 86.5813 98.4827 84.832 100.104 83.296C101.811 81.6747 103.773 80.6507 105.992 80.224C108.296 79.712 111.155 79.456 114.568 79.456H116.104V172ZM121.224 79.456H137.48C143.709 79.456 148.403 80.5227 151.56 82.656C154.803 84.7893 156.424 88.5013 156.424 93.792V105.312C156.424 107.104 155.827 108 154.632 108H138.504C137.309 108 136.584 107.829 136.328 107.488C136.072 107.147 135.944 106.421 135.944 105.312V95.328C135.944 93.9627 135.731 93.024 135.304 92.512C134.963 91.9147 134.024 91.616 132.488 91.616H121.224V79.456ZM138.504 143.456H154.632C155.827 143.456 156.424 144.352 156.424 146.144V157.664C156.424 162.955 154.803 166.667 151.56 168.8C148.403 170.933 143.709 172 137.48 172H121.224V159.84H132.488C134.024 159.84 134.963 159.584 135.304 159.072C135.731 158.475 135.944 157.493 135.944 156.128V146.144C135.944 145.035 136.072 144.309 136.328 143.968C136.584 143.627 137.309 143.456 138.504 143.456Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_438_46"
                x1="53.9146"
                y1="37.3262"
                x2="212.154"
                y2="210.241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E2BC62" />
                <stop offset="0.5" stopColor="#FBD772" />
                <stop offset="1" stopColor="#E2BC62" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_438_46"
                x1="41.4724"
                y1="33.8169"
                x2="173.232"
                y2="235.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AC8130" />
                <stop offset="1" stopColor="#F7E18B" />
              </linearGradient>
            </defs>
          </svg>
          <h1
            style={{
              position: "absolute",
              left: `${touchPosition.x}px`,
              top: `${touchPosition.y}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // Kliklarga javob bermasligi uchun
            }}
          >
            +1
          </h1>
        </button>

        <div className="clickInfo">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_438_13)">
              <path
                d="M0 15.9997H9.26471L6.04353 28L20.1682 12.0003H10.9035L14.1176 0L0 15.9997Z"
                fill="#FBD772"
              />
            </g>
            <defs>
              <clipPath id="clip0_438_13">
                <rect width="20" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h2>
            <span className="span1">{charge}</span>/
            <span className="span2">{charge}</span>
          </h2>
        </div>
      </div>

      <p>userID: {userId}</p>
      <p>{xato}</p>
      <p>userName: {username}</p>
      <p>{user ? JSON.stringify(user) : "User ma'lumotlari yuklanmoqda..."}</p>
      <p>
        {tanga}
        {/* {tanga.length > 0
          ? JSON.stringify(tanga)
          : "Tanga ma'lumotlari yuklanmoqda..."} */}
      </p>
    </div>
  );
};

export default Earn;
