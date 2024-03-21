import React, { useEffect, useState } from 'react';
import "../User/UserPage.css";
import DataMock from '../../mockApi/DataMock.json';

const UserPageMock = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/user\/mock\/(\d+)/); // Modifier la regex en fonction de votre URL

    if (match) {
      const userId = parseInt(match[1]);
      const user = DataMock.find(user => user.id === userId);
      if (user) {
        setUserData(user);
      } else {
        console.log(`Aucune donnée trouvée pour l'utilisateur avec l'ID ${userId}.`);
      }
    } else {
      console.log("ID utilisateur non trouvé dans l'URL.");
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

export default UserPageMock;