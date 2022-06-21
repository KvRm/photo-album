<template>
  <photo-card></photo-card>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import PhotoCard from '@/components/PhotoCard.vue'

export default defineComponent({
  name: 'MainPaige',
  components: {
    PhotoCard
  },

  setup() {


    return {
      ref,
      onMounted,
      setLike,
    }
  }
})
</script>
