import Axios from "axios";

class API {
   adapter
   constructor() {
      this.adapter = Axios.create()

      this.adapter.interceptors.request.use(
         (config) => {
            // const res = config
            // if (auth.token) {
            //    res.headers.Authorization = `Bearer ${auth.token}`
            // }
            return config
         })
   }

   getPosts() {
      return this.adapter.get(`http://localhost:1337/api/posts?populate=image`)
   }

   getOnePostInfo() {
      return this.adapter.get(`http://localhost:1337/api/posts/1?populate=like&populate=comments&populate=users_permissions_user&populate=image`)
   }
}

export default new API