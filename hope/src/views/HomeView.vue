<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { LoginApi } from '@/api/api'

export default {
  data() {
    return {}
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
  created() {
    LoginApi({ username: 'admin', password: '123456' }).then((res) => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped></style>
