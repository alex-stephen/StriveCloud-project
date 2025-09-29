import data from '../data.json';

const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getUserProfile = async () => {
  await simulateDelay(1000); // Simulate network delay of 1 second
  return data.profile;
};

export const getUserAchievements = async () => {
  await simulateDelay(1000); // Simulate network delay of 1 second
  return data.achievements;
};
