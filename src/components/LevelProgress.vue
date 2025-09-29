<script setup>
import { defineProps, computed, ref, watch, onMounted } from 'vue';

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const localProfile = ref({ ...props.profile });
const displayProgressPercent = ref(0);

const maxXP = computed(() => localProfile.value.current_xp + localProfile.value.xp_to_next_level);
const progressPercent = computed(() => (localProfile.value.current_xp / maxXP.value) * 100);

const updateDisplayProgress = () => {
  displayProgressPercent.value = progressPercent.value;
};

onMounted(() => {
  // Initialize displayProgressPercent when component mounts
  updateDisplayProgress();
});

watch(() => props.profile, (newProfile) => {
  localProfile.value = { ...newProfile };
  updateDisplayProgress();
}, { deep: true });

watch(progressPercent, () => {
  updateDisplayProgress();
});

const levelUp = () => {
  // Animate to 100%
  displayProgressPercent.value = 100;

  setTimeout(() => {
    localProfile.value.level++;
    localProfile.value.current_xp = 0;
    localProfile.value.xp_to_next_level += 500;

    // After updating profile, immediately reset displayProgressPercent to 0
    // and then set it to the new progressPercent for the new level
    setTimeout(() => {
      displayProgressPercent.value = 3; 
    }, 50); 

  }, 800);
};
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="me-2">
            <span>{{ localProfile.level - 1 }}</span>
        </div>

        <div class="flex-grow-1">
            <div class="progress" style="background-color: #e6e9ef">
                <div
                    class="progress-bar bg-success rounded-3"
                    role="progressbar"
                    :aria-valuenow="localProfile.current_xp"
                    aria-valuemin="0"
                    :aria-valuemax="maxXP"
                    :style="{ width: displayProgressPercent + '%'}" 
                >
                </div>
            </div>
        </div>

        <div class="ms-2">
            <span>{{ localProfile.level }}</span>
        </div>
    </div>
    <div class="d-flex flex-column align-items-end">
        <small class="text-muted mb-2">
            {{ localProfile.xp_to_next_level }} xp to level up!
        </small>
        <button class="btn btn-success btn-md mb-4" @click="levelUp">
            Level Up
        </button>
    </div>
</template>
