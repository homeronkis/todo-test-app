<template>
  <div class="user">
    <div class="user-avatar circle">
      <img v-if="user.avatar.length > 0" :src="user.avatar" alt="image" />
      <span class="no-avatar" v-else>{{ user.name.charAt(0) + user.lastName.charAt(0)}}</span>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    user: Object
  }
}
</script>
<style lang="sass">
.user
  margin-right: 5px
  .user-avatar
    border: 1px solid $black
    background-color: #F2F2F2
    img
      display: block
      width: 100%
      height: 100%
      border-radius: 50%
      object-fit: cover

.no-avatar
  font-size: 0.6em
  text-transform: uppercase
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
</style>
