<i18n>
{
  "en": {
    "app": {
      "msg": "Welcome to Your Vue.js App"
    }
  },
  "es": {
    "app": {
      "msg": "Bienvenido a tu app Vue.js"
    }
  }
}
</i18n>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('app.msg')"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
