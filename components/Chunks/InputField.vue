<template>
  <div class='input-field'>
    <input type='text' @input='text' :placeholder='placeHolder'/>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: function(){
        return 'some title'
      }
    },
    placeHolder: {
      type: String,
      required: false,
      default: function(){
        return 'Field'
      }
    }
  },
  methods: {
    text: function(e){
      this.$emit('getTxt', e.target.value)
    }
  }
}
</script>
<style lang='sass' scoped>
input
  margin: 10px 0
  display: block
  width: 100%
  border: 1px solid $black
  height: 35px
  outline: none
  padding: 0 15px
  box-sizing: border-box
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.04)
  border-radius: 6px
</style>
