<script setup>
import { defineProps, computed } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const maxXP = computed(() => props.profile.current_xp + props.profile.xp_to_next_level);
const progressPercent = computed(() => (props.profile.current_xp / maxXP.value) * 100);
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="me-2">
            <span>{{ props.profile.level - 1 }}</span>
        </div>

        <div class="flex-grow-1">
            <div class="progress">
                <div
                    class="progress-bar bg-success rounded-3"
                    role="progressbar"
                    :aria-valuenow="props.profile.current_xp"
                    aria-valuemin="0"
                    :aria-valuemax="maxXP"
                    :style="{ width: progressPercent + '%' }"
                >
                </div>
            </div>
        </div>

        <div class="ms-2">
            <span>{{ props.profile.level }}</span>
        </div>
    </div>
    <div class="d-flex flex-column align-items-end">
        <small class="text-muted mb-2">
            {{ props.profile.xp_to_next_level }} xp to level up!
        </small>
        <button class="btn btn-success btn-md mb-4">
            Level Up
        </button>
    </div>
</template>
