import React, { useEffect, useState } from 'react';
import calIcon from "../../assets/Logo/calories-icon.png"
import protIcon from "../../assets/Logo/protein-icon.png"
import glucIcon from "../../assets/Logo/carbs-icon.png"
import lipIcon from "../../assets/Logo/fat-icon.png"
import ChartUser from '../ChartUserMock/ChartuserMock';
import DataMock from '../../mockApi/DataMock.json';

const UserDataMock = () => {
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
    <div className='UserData'>
      <div className='sectionCharts'> 
        <ChartUser/>
      </div>
      {userData && (
        <div className='sectionMacro'>
          <div className='divMacro'>
            <div className='macro'>
              <img src={calIcon} className='macroIcon' alt='MacroIcon' />
              <div className='macroTxt'>
                {` ${userData.keyData.calorieCount}kCal`}<span>Calories</span>
              </div>
            </div>
            <div className='macro'>
              <img src={protIcon} className='macroIcon' alt='MacroIcon' />
              <div  className='macroTxt'>
                {` ${userData.keyData.proteinCount}g`}<span>Protéines</span>
              </div>
            </div>
            <div className='macro'>
              <img src={glucIcon} className='macroIcon' alt='MacroIcon' />
              <div className='macroTxt'>
                {` ${userData.keyData.carbohydrateCount}g`}<span>Glucides</span>
              </div>
            </div>
            <div className='macro'>
              <img src={lipIcon} className='macroIcon' alt='MacroIcon' />
              <div className='macroTxt'>
                {` ${userData.keyData.lipidCount}g`}<span>Lipides</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataMock;
