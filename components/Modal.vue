<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
        <span class='close' @click="$emit('close')">x</span>

          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>

          <span></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
</script>
<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 0.3s ease
.close
  width: 50px
  height: 50px
  cursor: pointer
  position: absolute
  right: 0
  top: 10px
  font-size: 1.5em
  font-weight: bold
  display: flex
  justify-content: center
  &:hover
    color: #8D8D8D

.modal-wrapper
   display: table-cell
   vertical-align: middle
   .modal-container
     position: relative
     left: 0
     margin: 0px auto
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
     transition: all 0.3s ease
     font-family: Helvetica, Arial, sans-serif
     background: #ffff
     width: 330px
     padding: 20px 30px
     border-radius: 16px
     .modal-body
       ::v-deep .modal-title
         font-weight: bold
         font-size: 1.5em

.modal-enter, .modal-leave-active
  opacity: 0

.modal-enter .modal-container, .modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
