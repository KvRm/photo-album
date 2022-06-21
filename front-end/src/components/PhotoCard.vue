<template>
   <div class="card-container">
      <div class="card d-flex">
         <img src="../assets/images/website.jpg" class="card-img-top" alt="user img">
         <div class="card-body">
            <h5 class="card-title">Card title</h5>
         </div>
         <div class="card-reactions d-flex">
            <div class="card-reactions__like not-liked" @click="setLike">
               <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><path class="cls-1" d="M12,22c8-4,11-9,11-14A6,6,0,0,0,12,4.686,6,6,0,0,0,1,8C1,13,4,18,12,22Z"/></svg>
            </div>
         </div>
         <div class="card-comments">
            sadsafsagd
         </div>
      </div>
   </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
   name: 'PhotoCard',
})

</script>