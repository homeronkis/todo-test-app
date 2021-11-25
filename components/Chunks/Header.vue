<template>
  <div class="header">
    <div class="title">
      <span class="img"><img src="@/assets/icons/title-icon.svg" alt="icon"></span>
      <span class="txt">Tasks (4)</span>
    </div>
  </div>
</template>
<style lang="sass">
.header
  max-width: 1216px
  margin: 2px auto
  background-color: #ffffff
  height: 61px
  border-radius: 16.5px 16.5px 0px 0px
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.04)
  .title
    width: 139px
    height: 100%
    //padding: 0 10px
    display: flex
    justify-content: center
    align-items: center
    background: #ECECEC
    border: 0.5px solid #C7C7C7
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
</style>
