import React, { useEffect, useState } from 'react';
import './Frens.css';

const url = ""


const Frens = () => {
  // State larni e'lon qilish
  const [inviteLink, setInviteLink] = useState('');
  const [usersCount, setUsersCount] = useState(0);
  const [friends, setFriends] = useState([]);

  // useEffect orqali component yuklanganda API so'rov yuborish
  useEffect(() => {
    // Foydalanuvchi ID'sini olish
    const userId = 1230394567; // Bu ID'ni dinamik tarzda olish kerak, Telegram Web App yoki boshqa manbadan
    const fetchUserData = async () => {
      try {
        // API orqali foydalanuvchi ma'lumotlarini olish
        const response = await fetch(`${url}/api/friends/${userId}`);
        const data = await response.json();

        // API'dan olingan ma'lumotlar asosida state yangilash
        setInviteLink(data.link);
        setUsersCount(data.users);
        setFriends(data.friends);
      } catch (error) {
        console.error('Xatolik yuz berdi: ', error);
      }
    };

    fetchUserData();
  }, []); // Bo'sh array -> faqat birinchi renderda ishlaydi

  return (
    <div className='frens'>
      <div className="header">
        <div className="userInfo">
          <h1>{usersCount}</h1>
          <h1>Users</h1>
        </div>

        <div className="userLink">
          <div className="invites">
            <label>
              <span>My invite link</span>
              <button 
                className="copy" 
                onClick={() => navigator.clipboard.writeText(inviteLink)}
              >
                Copy
              </button>
            </label>

            <a href={inviteLink}>{inviteLink}</a>
          </div>

          {/* Do'stlar ro'yxatini ko'rsatish */}
          <div className="friendsList">
            <h3>Friends:</h3>
            <ul>
              {friends.map((friend, index) => (
                <li key={index}>{friend}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frens;
