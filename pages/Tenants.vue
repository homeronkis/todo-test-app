<template>
  <div class='tenants-page'>
    <div class='content'>
      <div class='add-btn'>
        <button @click='add'>
          add
        </button>
      </div>
      <TenantsList />

      <Modal v-if='addTenant' @close='close'>
        <template v-slot:body>
          <div class='modal-title'>
            Add Tenant
          </div>
          <div class='inputs'>
            <InputField @getTxt='name' :title="'name'" :place-holder="'tenant name'"/>
            <InputField @getTxt='address' :title="'address'" :place-holder="'address'"/>
<!--            <InputField @getTxt='name' :title="'image'" :place-holder="'image'"/>-->
          </div>
          <div class='row-btn'>
            <v-btn
              @click='saveTenant'
              class='save-btn'
              :disabled='!nameTxt || !addressTxt'
            >Save</v-btn>
          </div>

        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import TenantsList from '../components/Tables/TenantsList'
import Modal from '../components/Modal'
import InputField from '../components/Chunks/InputField'
export default {
  data: function(){
    return {
      addTenant: false,
      nameTxt: '',
      addressTxt: ''
    }
  },
  components: {
    TenantsList,
    Modal,
    InputField
  },
  methods: {
    close: function(){
      this.addTenant = false
    },
    add: function() {
      this.addTenant = true
    },
    name: function(txt){
      this.nameTxt = txt
    },
    address: function(txt){
      this.addressTxt = txt
    },
    saveTenant: async function(){
      await this.$store.dispatch('addNewTenant', { name: this.nameTxt, address: this.addressTxt })
      this.close()
    }
  }
}
</script>
<style lang='sass' scoped>
.row-btn
  display: flex
  justify-content: center
  align-items: center
  flex-shrink: 0
.inputs
  margin: 20px 0
.tenants-page
  position: relative
  z-index: 1

  .content
    max-width: 1168px
    margin: 20px auto

    .add-btn
      margin: 20px 0
    //.modal-mask
    //  .modal-wrapper
    //    .modal-container
    //      .modal-body

</style>
