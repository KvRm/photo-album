import Axios from "axios";

class API {
   adapter
   constructor() {
      this.adapter = Axios.create()
   }

   getPosts() {
      return this.adapter.get(`http://localhost:1337/api/posts?populate=image`)
   }

   getOnePostInfo(id) {
      return this.adapter.get(`http://localhost:1337/api/posts/${id}?populate=like&populate=comments&populate=users_permissions_user&populate=image`)
   }

   getUsetsInfo() {
      return this.adapter.get(`http://localhost:1337/api/users`)
   }

   registerUser(data) {
      return this.adapter.post(`http://localhost:1337/api/auth/local/register`, data).then(response => {
         localStorage.setItem('token', response.data.jwt)
      })
   }

   login(data) {
      return this.adapter.post(`http://localhost:1337/api/auth/local`, data).then(response => {
         localStorage.setItem('token', response.data.jwt)
      })
   }

   postComment(data) {
      return this.adapter.post(`http://localhost:1337/api/comments`, data).then(response => {
         console.log(response)
      })
   }
}

export default new API