import React, { useEffect, useState } from 'react';
import ApiService from '../../api/api';

import "./UserData.css"
import calIcon from "../../assets/Logo/calories-icon.png"
import protIcon from "../../assets/Logo/protein-icon.png"
import glucIcon from "../../assets/Logo/carbs-icon.png"
import lipIcon from "../../assets/Logo/fat-icon.png"
import ChartUser from '../ChartsUserDay/Chartuser';

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/user\/(\d+)/);

    if (match) {
      const userId = match[1];


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

export default UserData;