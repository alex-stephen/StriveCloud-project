import { defineStore } from 'pinia';
import { getUserProfile, getUserAchievements } from '../api';

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: null,
    achievements: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUserData() {
      this.loading = true;
      this.error = null;
      try {
        this.profile = await getUserProfile();
        this.achievements = await getUserAchievements();
      } catch (error) {
        this.error = 'Failed to fetch user data.';
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
