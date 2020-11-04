<template>
  <div class="content--header">
    <div class="logo">
      <Logo />
      <Slogan />
    </div>
    <Social />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Slogan from '~/components/Slogan.vue'
import Social from '~/components/Social.vue'

export default {
  components: { Logo, Slogan, Social },
}
</script>
