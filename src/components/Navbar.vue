<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1 class="navbar-brand" href="#"><router-link class="nav-link" :to="{name:'home'}">Vue3-店商網站</router-link></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'home'}">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'登入頁面'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Dashboard'}">DASHBOARD</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
