<template>
  <div class='header'>
    <NuxtLink to='/'>
      <div :class="['prop','link', ($nuxt.$route.name === 'index' ? 'active' : '')]">
        Properties
      </div>
    </NuxtLink>
    <NuxtLink to='/Tenants'>
      <div :class="['ten','link', ($nuxt.$route.name === 'Tenants' ? 'active' : '')]">Tenants</div>
    </NuxtLink>
  </div>
</template>
<style lang='sass' scoped>
.header
  max-width: 1216px
  margin: 2px auto
  background-color: #ffffff
  display: flex
  align-items: center
  justify-content: flex-start
  height: 61px
  border-radius: 16.5px 16.5px 0px 0px
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.04)
  a
    display: block
    height: 100%

    .link
      cursor: pointer
      height: 100%
      width: 139px
      &:hover
        background: #ECECEC
        border: 0.5px solid #C7C7C7

    .prop
      cursor: pointer
      //padding: 0 10px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 16.5px 0px 0px 0px

      .txt
        font-size: 1.1em

      img
        width: 14px
        height: 16px
        margin-right: 15px

        span
          display: block
          width: 100%
          height: 100%

    .ten
      text-align: center
      display: flex
      justify-content: center
      align-items: center

.active
  background: #ECECEC
  border: 0.5px solid #C7C7C7
</style>
