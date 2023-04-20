<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <h1 class="navbar-brand" href="#"><router-link class="nav-link" :to="{name:'home'}">Vue3-電商網站</router-link></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <router-link class="nav-link" :to="{name:'商品列表'}">商品列表</router-link>
          <router-link class="nav-link" :to="{name:'訂單列表'}">訂單</router-link>
          <router-link class="nav-link" :to="{name:'優惠券'}">優惠券</router-link>
          <a href="#" @click.prevent="logout"></a>
      </div>
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
