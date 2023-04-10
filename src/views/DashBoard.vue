<template>DashBoard</template>

<script>
export default {
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    console.log(token)
    this.$http.instance.defaults.headers.common[' Authorization '] = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('login')
      }
    })
  }
}
</script>
