<template>
  <div class='task'>
    <div class='accordion-header'>
      <div class='accordion-btn' @click='openAccordion'>
        <img src='@/assets/icons/accordionBtn.svg' alt='Down' :class="info.active ? 'rotateIcon' : ''" />
      </div>
      <div class='title' @click='openAccordion'>
        <span>{{ info.title }}</span>
      </div>
      <div class='users-list'>
      <span class='add-users-btn circle'>
        +
      </span>
        <div class='flex-wrapper'>
          <ChunksUser v-for='(user, index) in info.users' :key='index' :user='user' />
        </div>
        <div class='count-users'>
        <span class='circle'>
          {{ '+' + info.users.length }}
        </span>
        </div>
      </div>
      <div class='date'>
        <div class='icon'>
          <img src='@/assets/icons/calendar.svg' alt='calendar' />
        </div>
        <span>{{ info.date }}</span>
      </div>
      <div class='status'>
        <span :class="['current-status',(info.status.toLowerCase().replace(' ', ''))]" @click='changeStatus'>
          {{ info.status }}
          <span class='status-check-icon'>
            <svg width='7' height='4' viewBox='0 0 7 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.20464 3.99865C3.09769 3.99891 2.99405 3.95243 2.9117 3.86729L0.165354 1.01162C0.071879 0.914678 0.0130961 0.775372 0.00193686 0.624349C-0.00922233 0.473327 0.0281563 0.322958 0.10585 0.206323C0.183543 0.089688 0.295187 0.0163408 0.416222 0.00241676C0.537256 -0.0115073 0.657766 0.0351323 0.751241 0.132076L3.20464 2.69075L5.65805 0.223457C5.70486 0.176016 5.75874 0.140587 5.81657 0.119209C5.87439 0.0978302 5.93504 0.090923 5.99501 0.0988842C6.05499 0.106845 6.11311 0.129518 6.16604 0.165598C6.21897 0.201679 6.26566 0.250457 6.30344 0.309127C6.34535 0.367852 6.3771 0.436746 6.39669 0.511492C6.41628 0.586238 6.42328 0.665227 6.41726 0.743508C6.41125 0.821789 6.39234 0.897677 6.36173 0.966417C6.33111 1.03516 6.28945 1.09527 6.23935 1.14298L3.49301 3.90156C3.40829 3.97324 3.30676 4.00743 3.20464 3.99865Z'
              fill='#ffff' />
            </svg>
          </span>
        </span>
        <div class='status-menu' v-if='statusMenu'>
          <ul>
            <li class="notyet" v-if="info.status !== 'Not yet'">Not yet</li>
            <li class="completed" v-if="info.status !== 'Completed'">Completed</li>
            <li class="canceled" v-if="info.status !== 'Canceled'">Canceled</li>
          </ul>
        </div>
      </div>
      <div class="remove" @click="removeTask">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2927 3.5122C15.2927 3.70336 15.2203 3.88787 15.0893 4.03073C14.9583 4.17359 14.7778 4.26485 14.582 4.28722L14.4878 4.29268H13.8077L12.8169 14.0644C12.7629 14.5946 12.5075 15.0864 12.1004 15.4442C11.6932 15.8019 11.1634 16.0001 10.6139 16H4.67876C4.12931 16.0001 3.59947 15.8019 3.19231 15.4442C2.78514 15.0864 2.52975 14.5946 2.47581 14.0644L1.485 4.29268H0.804878C0.591411 4.29268 0.386687 4.21045 0.235743 4.06408C0.0847994 3.91771 0 3.71919 0 3.5122C0 3.3052 0.0847994 3.10668 0.235743 2.96031C0.386687 2.81394 0.591411 2.73171 0.804878 2.73171H4.82927C4.82927 2.37297 4.90213 2.01775 5.0437 1.68633C5.18528 1.3549 5.39278 1.05376 5.65437 0.800099C5.91596 0.546436 6.22651 0.34522 6.56829 0.207939C6.91008 0.0706577 7.2764 0 7.64634 0C8.01628 0 8.38261 0.0706577 8.72439 0.207939C9.06617 0.34522 9.37672 0.546436 9.63831 0.800099C9.8999 1.05376 10.1074 1.3549 10.249 1.68633C10.3905 2.01775 10.4634 2.37297 10.4634 2.73171H14.4878C14.7013 2.73171 14.906 2.81394 15.0569 2.96031C15.2079 3.10668 15.2927 3.3052 15.2927 3.5122ZM9.45732 6.04878C9.31144 6.04879 9.17051 6.10001 9.06057 6.19299C8.95063 6.28596 8.87913 6.4144 8.85929 6.55454L8.85366 6.63415V12.0976L8.85929 12.1772C8.87917 12.3173 8.95069 12.4457 9.06062 12.5386C9.17056 12.6315 9.31147 12.6827 9.45732 12.6827C9.60316 12.6827 9.74408 12.6315 9.85401 12.5386C9.96394 12.4457 10.0355 12.3173 10.0553 12.1772L10.061 12.0976V6.63415L10.0553 6.55454C10.0355 6.4144 9.964 6.28596 9.85407 6.19299C9.74413 6.10001 9.60319 6.04879 9.45732 6.04878ZM5.83537 6.04878C5.68949 6.04879 5.54855 6.10001 5.43862 6.19299C5.32868 6.28596 5.25718 6.4144 5.23734 6.55454L5.23171 6.63415V12.0976L5.23734 12.1772C5.25722 12.3173 5.32874 12.4457 5.43867 12.5386C5.5486 12.6315 5.68952 12.6827 5.83537 12.6827C5.98121 12.6827 6.12213 12.6315 6.23206 12.5386C6.34199 12.4457 6.41351 12.3173 6.43339 12.1772L6.43902 12.0976V6.63415L6.43339 6.55454C6.41355 6.4144 6.34205 6.28596 6.23211 6.19299C6.12218 6.10001 5.98124 6.04879 5.83537 6.04878ZM7.64634 1.56098C7.32614 1.56098 7.01906 1.68432 6.79264 1.90388C6.56622 2.12343 6.43902 2.42121 6.43902 2.73171H8.85366C8.85366 2.42121 8.72646 2.12343 8.50004 1.90388C8.27363 1.68432 7.96654 1.56098 7.64634 1.56098Z" fill="#4F4F4F"/>
        </svg>
      </div>
    </div>
    <div class='accordion-body' v-if='info.active'>
      {{ info.description }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
    index: Number,
  },
  data: function(){
    return {
      statusMenu: false

    }
  },
  methods: {
    openAccordion: function() {
      this.$emit('openAccordion', this.index)
    },
    changeStatus: function(){
      this.statusMenu = !this.statusMenu;
    },
    removeTask: function(){
      this.$emit('removeTask', this.index)
    }
  }
}
</script>
<style lang='sass'>
.task
  background-color: #ffffff
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.04)
  border-radius: 6px
  margin-bottom: 10px

  .accordion-header
    position: relative
    z-index: 1
    cursor: pointer
    display: grid
    grid-template-columns: 30px 1fr 1.5fr 200px 130px 50px

    align-items: center
    padding: 10px 0

    .accordion-btn
      //margin: 0 15px
      display: flex
      justify-content: center
      align-items: center
      flex-shrink: 0

      .rotateIcon
        transform: rotate(-180deg)

    .title
      span
        font-weight: 500

    .users-list
      display: flex
      justify-content: flex-start
      align-items: center

      .add-users-btn
        background-color: $darkBlue
        margin-right: 10px
        color: #ffffff
        flex-shrink: 0
        font-size: 1.2em

      .flex-wrapper
        display: flex

      .count-users
        span
          display: flex
          flex-shrink: 0
          justify-content: center
          align-items: center
          background-color: $darkBlue
          font-size: .8em
          color: #ffffff


    .date
      display: flex

      .icon
        width: 19px
        height: 17px

        img
          display: block
          width: 100%
          height: 100%

      span
        display: block
        margin-left: 5px
        color: $lightGreyTxt
        border-bottom: 1px solid #4F4F4F
        padding-bottom: 2px
    .remove
      display: flex
      justify-content: center
      align-items: center
    .status
      position: relative
      z-index: 1
      .status-menu
        position: absolute
        top: 0px
        z-index: 9999
        right: -200px
        ul
          background: #FFFFFF
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 8px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.04)
          height: 102px
          width: 141px
          border-radius: 12px
          .notyet
            background-color: $yellow

          .completed
            background-color: $green

          .canceled
            background-color: $red
          li
            text-align: center
            color: #ffffff
            font-size: 12px
            display: flex
            align-items: center
            justify-content: center
            flex-shrink: 0
            font-weight: 500
            width: 122px
            height: 24px
            border-radius: 12px
            margin-bottom: 5px


      .notyet
        background-color: $yellow

      .completed
        background-color: $green

      .canceled
        background-color: $red

      .current-status
        text-align: center
        color: #ffffff
        font-size: 12px
        display: flex
        align-items: center
        justify-content: center
        flex-shrink: 0
        font-weight: 500
        width: 122px
        height: 24px
        border-radius: 12px
        position: relative
        .status-check-icon
          position: absolute
          right: 10px
          top: 3px

        &:first-letter
          text-transform: uppercase

    .remove

  .accordion-body
    padding: 10px 30px
    font-weight: bold
</style>
