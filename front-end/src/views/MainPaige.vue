<template>
  <div class="container">
    <search-component></search-component>
    <photo-card 
    v-for="post in posts" :key="post.id" :post="post">
    {{post}}
    </photo-card>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import PhotoCard from '@/components/PhotoCard.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import api from '@/lib/axios'

export default defineComponent({
  name: 'MainPaige',
  components: {
    PhotoCard,
    SearchComponent
  },

  setup() {
    const posts = ref([])

    onMounted(() => {
      loadPosts()
    })

    function loadPosts() {
      return api.getPosts().then(
        (resp) => posts.value = resp.data.data
      )
    }

    return {
      posts,
      loadPosts,
      ref,
      onMounted,
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    background-color: azure;
    padding-bottom: 10vh;
    padding-right: 1rem;
    background-color: rgba(26, 128, 26, 0.03);
  }
</style>