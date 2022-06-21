<template>
   <div class="footer">
      <div class="container">
         <div class="row">
            <div class="footer__information flex-column col-4">
               <span class="footer__tag">Information</span>
               <ul>
                  <li class="footer__item">
                     <a href="#" class="footer__link">About</a>
                  </li>
               </ul>
            </div>
            <div class="footer__help flex-column col-4">
               <span class="footer__tag">Help</span>
               <ul>
                  <li class="footer__item">
                     <a href="#" class="footer__link">Support</a>
                  </li>
                  <li class="footer__item">
                     <a href="#" class="footer__link">Contact</a>
                  </li>
               </ul>
            </div>
            <div class="footer-help col-4">
               <span class="footer__tag">Socials</span>
               <div class="d-flex">
                  <a href="https://vk.com/phi00" class="footer-help__link">
                     <img src="../assets/images/icons/v.svg" alt="vk" class="footer-help__img" />
                  </a>
                  <a href="https://github.com/KvRm" class="footer-help__link">
                     <img src="../assets/images/icons/g.svg" alt="github" class="footer-help__img" />
                  </a>
                  <a href="https://t.me/efiopz" class="footer-help__link">
                     <img src="../assets/images/icons/t.svg" alt="telegram" class="footer-help__img">
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
   name: 'FooterComponent',
})

</script>