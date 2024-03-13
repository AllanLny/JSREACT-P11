// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [userData, setUserData] = useState(null);
//     // const [activityData, setActivityData] = useState(null);
//     // const [averageSessionsData, setAverageSessionsData] = useState(null);
//     // const [performanceData, setPerformanceData] = useState(null);

// // Récupère l'URL actuelle
// const currentUrl = window.location.href;
// const userId = ""

// // Utilise une expression régulière pour extraire l'ID utilisateur de l'URL
// const match = currentUrl.match(/\/user\/(\d+)/);

// // Vérifie si la correspondance a été trouvée
// if (match) {
//   const userId = match[1]; // Le premier groupe capturé (\d+) correspond à l'ID utilisateur
//   console.log("User ID:", userId);
// } else {
//   console.log("User ID non trouvé dans l'URL.");
// }

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get(`http://localhost:3000/user/${userId}`);
//         setUserData(userResponse.data);

//         // const activityResponse = await axios.get(`http://localhost:3000/user/${userId}/activity`);
//         // setActivityData(activityResponse.data);

//         // const averageSessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
//         // setAverageSessionsData(averageSessionsResponse.data);

//         // const performanceResponse = await axios.get(`http://localhost:3000/user/${userId}/performance`);
//         // setPerformanceData(performanceResponse.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des données :', error);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   return (
//     <div>
//       {/* Rendez votre interface utilisateur en utilisant les données récupérées */}
//       <pre>Données utilisateur : {JSON.stringify(userData, null)}</pre>
//       {/* <pre>Données d'activité : {JSON.stringify(activityData, null)}</pre>
//       <pre>Données de sessions moyennes : {JSON.stringify(averageSessionsData, null)}</pre>
//       <pre>Données de performances : {JSON.stringify(performanceData, null)}</pre> */}
//     </div>
//   );
// };

// export default App;


import axios from 'axios';

const ApiService = {
  getUserData: async (userId) => {
    try {
      const userData = await ApiService.fetchUserData(userId);
      userData.performance = await ApiService.fetchPerformance(userId);
      userData.averageSessions = await ApiService.fetchAverageSessions(userId);
      userData.activity = await ApiService.fetchActivity(userId);

      return userData;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données :', error);
    }
  },

  fetchUserData: async (userId) => {
    const userResponse = await axios.get(`http://localhost:3000/user/${userId}`);
    return userResponse.data.data;
  },

  fetchPerformance: async (userId) => {
    const performanceResponse = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return performanceResponse.data.data;
  },

  fetchAverageSessions: async (userId) => {
    const averageSessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return averageSessionsResponse.data.data;
  },

  fetchActivity: async (userId) => {
    const activityResponse = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return activityResponse.data.data;
  },
};

export default ApiService;
