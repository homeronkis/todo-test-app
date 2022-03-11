<template>
  <div class='main-page'>
    <div class='content'>
      <div class='add-btn'>
        <button @click='add'>
          add
        </button>
      </div>
      <Houses />

      <Modal v-if='addHouse' @close='close'>
        <template v-slot:body>
          <div class='modal-title'>
            Add House
          </div>
          <div class='inputs'>
            <InputField @getTxt='name' :title="'name'" :place-holder="'name'" />
            <InputField @getTxt='address' :title="'address'" :place-holder="'address'" />
              <v-row align='center'>
                <v-col
                  class='d-flex'
                  cols='12'
                  sm='12'
                >
                  <v-select
                    :items='items'
                    label='Properties type'
                    @change='pickPropVal'
                    dense
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            <v-checkbox
              v-model="checkbox"
              :label="`Mortgage`"
            ></v-checkbox>
            <!--            <InputField @getTxt='name' :title="'image'" :place-holder="'image'"/>-->
          </div>
          <div class='row-btn'>
            <v-btn
              @click='saveTenant'
              class='save-btn'
              :disabled='!nameTxt || !addressTxt || !propVal || !checkbox'
            >Save
            </v-btn>
          </div>

        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import Houses from '../components/Tables/HousesList'
import Modal from '../components/Modal'
import InputField from '../components/Chunks/InputField'

export default {
  data: function() {
    return {
      checkbox: false,
      addHouse: false,
      nameTxt: '',
      addressTxt: '',
      items: ['House', 'Flat'],
      propVal: ''

    }
  },
  components: {
    Houses,
    Modal,
    InputField
  },
  methods: {
    pickPropVal(e){
      this.propVal = e
    },
    close: function() {
      this.addHouse = false
    },
    add: function() {
      this.addHouse = true
    },
    name: function(txt) {
      this.nameTxt = txt
    },
    address: function(txt) {
      this.addressTxt = txt
    },
    saveTenant: async function() {
      await this.$store.dispatch('addNewHouse',
        {
          name: this.nameTxt,
          address: this.addressTxt,
          propValue: this.propVal,
          mortgage: this.checkbox ? 'Yes' : 'False'
        })
      this.close()
    }
  }
}
</script>
<style lang='sass'>
.row-btn
  display: flex
  justify-content: center
  align-items: center
  flex-shrink: 0

.inputs
  margin: 20px 0

.main-page
  position: relative
  z-index: 1

  .content
    max-width: 1168px
    margin: 20px auto

    .add-btn
      margin: 20px 0
</style>
