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
