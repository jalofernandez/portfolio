<template>
  <nav class="socialmedia">
    <a 
      v-for="(social, index) in social"
      :key="index"
      :class="`icon icon-${social.icon}`"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="social.title"
    >
      <img
        :src="`icons/${social.icon}-brands.svg`"
        :title="`Ver perfil de ${social.icon} de ${owner.nickname}`"
        :alt="`Ver perfil de ${social.icon} de ${owner.nickname}`"
        width="35"
        height="35"
      />
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      social: [
        {
          url: "https://twitter.com/jalofernandez",
          icon: "twitter",
        },
        {
          url: "https://www.instagram.com/jalofernandez/?ref=badge",
          icon: "instagram",
        },
        {
          url: "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
          icon: "facebook",
        },
        {
          url: "https://www.linkedin.com/in/javierlorenzofernandez/",
          icon: "linkedin",
        },
        {
          url: "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
          icon: "youtube",
        },
        {
          url: "https://github.com/jalofernandez",
          icon: "github",
        },
        {
          url: "mailto:"+this.$store.state.owner.email,
          icon: "email",
        }
      ]
    }
  }
}
</script>
