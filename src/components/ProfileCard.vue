<script setup>
import { defineProps } from 'vue';

import LevelProgress from './LevelProgress.vue';
import AchievementList from './AchievementList.vue';


const props = defineProps({
  achievements: {
    type: Array,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card text-center p-3">
    <img
      v-if="props.profile.avatar_url"
      :src="props.profile.avatar_url"
      :alt="props.profile.name"
      class="rounded-circle border border-success mb-2"
      style="width: 100px; height: 100px; object-fit: cover; display: block; margin: 0 auto;"
    >

    <h5 class="card-title mb-1">{{ props.profile.name }}</h5>

    <p class="text-muted mb-1">Level {{ props.profile.level }}</p>

    <LevelProgress :profile="props.profile" />
    <div class="achievements-wrapper">
      <AchievementList :achievements="achievements" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 500px;
  border-radius: 16px;
}

.achievements-wrapper {
  margin: 0 -1rem -1rem -1rem !important;
  padding: 0 !important;
}

.achievements-wrapper ::v-deep() {
  background: #d5d5d5;
  border-radius: 16px;
}
</style>