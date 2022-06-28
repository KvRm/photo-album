<template>
  <nav class="navbar navbar-expand-lg header">
    <div class="container-fluid header__container container d-flex">
      <a class="navbar-brand header__logo col-2" href="#">Navbar</a>
      <div class="col-5">
        <ul class="navbar-nav flex-row">
          <li class="nav-item header__item" v-for="(item,i) in headerMenuList" :key="i">
            <router-link class="nav-link header__link" aria-current="page" :to="item.path">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-4 d-flex gap-4 header-buttons-group"
        v-if="this.$root.globalVar == 0"
      >
        <router-link to="/sign-up">
          <button class="header-buttons-group__button sign-up">Sign Up</button>
        </router-link>
        <router-link to="/authorization">
          <button class="header-buttons-group__button log-in">Log In</button>
        </router-link>
      </div>
      <div v-else class="col-4 d-flex header-me">
        <div>
          <router-link to="/me">
            <img class="header-me__logo" src="@/assets/images/icons/Account-512.webp" alt="me">
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent} from "vue"

export default defineComponent({
  name: 'HeaderComponent',

  data() {
    this.$root.globalVar = localStorage.getItem('token') ? 1 : 0

    const headerMenuList = [
      { name: 'Feed', path: '/', clicked: false},
      { name: 'Create Post', path: '/new', clicked: false},
    ]

    return {
      headerMenuList,
    }
  },
})

</script>