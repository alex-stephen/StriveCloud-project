<script setup>
import { defineProps } from 'vue';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const props = defineProps({
  achievements: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container border rounded-4">
    <FontAwesomeIcon :icon="faTrophy" size="2x" class="text-success mt-3"/>
    <h2 class="mb-3 mt text-center text-success fw-bold">Achievements</h2>
    <div class="row row-cols-3 g-4">
      <div class="col text-center p-2" v-for="achievement in achievements" :key="achievement.id">
        <img
          :src="achievement.icon_url"
          :alt="achievement.title"
          class="card-img img-fluid rounded-circle border border-success mb-2"
        >
          <div class="card-body p-0">
            <h5 class="card-title mb-2 fs-6 fs-md-5 text-break text-success">{{ achievement.title }}</h5>
            <p class="card-text"><small class="text-break description-text">{{ achievement.description }}</small></p>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img {
  width: 100%;
  max-width: 100px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.description-text {
  color: #477755;
}
</style>
