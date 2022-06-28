<template>
   <div class="card-container">
      <div class="card d-flex">
         <img src="../assets/images/website.jpg" class="card-img-top" alt="user img">
         <div class="card-body row">
            <h5 class="card-title">{{postInfo.message}}</h5>
            <div class="card-reactions d-flex">
               <div class="card-reactions__like not-liked">
                  <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><path class="cls-1" d="M12,22c8-4,11-9,11-14A6,6,0,0,0,12,4.686,6,6,0,0,0,1,8C1,13,4,18,12,22Z"/></svg>
               </div>
               <small class="like-count"></small>
            </div>
         </div>
         <p class="show-comments" @click="showComments(postInfo.id)">Show comments</p>
         <div class="comments" v-if="viewMode">
            <div class="comment d-flex" v-for="post in postInfo.comments.value" :key="post.id">
            {{post.attributes.message}}
            </div>
            <div>
               <input
                  type="text"
                  class="comment-create"
                  placeholder="new comment"
                  v-model="commentToPost"
               >
               <button class="post-button" type="button" @click="postComment">Post</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import api from '@/lib/axios'
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
   name: 'PhotoCard',
   props: {
    post: Object,
  },

  setup(props) {
   const viewMode = ref(false)

   const postInfo = {
      message: ref(''),
      image: ref(''),
      comments: ref([]),
      id: ref(),
   }

   const commentToPost = ref('')

   function showComments(id) {
      viewMode.value = !viewMode.value
      if (viewMode.value) {
         api.getOnePostInfo(id.value).then(
            res => postInfo.comments.value = res.data.data.attributes.comments.data
         )
      }
   }

   function postComment() {
      const data = {
         message: '' + commentToPost.value,
         post: {
            id: postInfo.id
         }
      }
      api.postComment(data)
   }

   onMounted(() => {
      postInfo.message.value = props.post.attributes.message
      postInfo.image.value = props.post.attributes.data
      postInfo.id.value = props.post.id
   })

   return {
      viewMode,
      postInfo,
      showComments,
      commentToPost,
      postComment
   }
  }
})

</script>