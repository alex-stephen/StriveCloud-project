<script setup>
import { useUserStore } from '../stores/userStore';
import { onMounted, computed } from 'vue';
import ProfileCard from './ProfileCard.vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUserData();
});

const profile = computed(() => userStore.profile);
const achievements = computed(() => userStore.achievements);
const loading = computed(() => userStore.loading);
</script>

<template>
  <div class="d-flex justify-content-center mt-4">
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <ProfileCard v-else-if="profile" :profile="profile" :achievements="achievements" />
    <div v-else-if="userStore.error" class="alert alert-danger" role="alert">
      {{ userStore.error }}
    </div>
    <div v-else>
      No data available.
    </div>
  </div>
</template>