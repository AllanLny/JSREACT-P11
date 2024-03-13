import React, { useEffect, useState } from 'react';
import ApiService from '../../api/api';
import "./UserPage.css"

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/user\/(\d+)/);

    if (match) {
      const userId = match[1];

      // Utilisez le service ApiService pour récupérer les données de l'utilisateur
      const fetchData = async () => {
        try {
          const userResponse = await ApiService.getUserData(userId);
          setUserData(userResponse);
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
    } else {
      console.log("User ID non trouvé dans l'URL.");
    }
  }, []);
  return (
    <div className='UserName'>
      {userData && (
        <div>
          <h2>Bonjour  <span className='redName'>{ `${userData.userInfos.firstName} `}</span></h2>
          <p className='NameTxt'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
