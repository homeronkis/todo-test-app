<template>
  <v-data-table
    :headers="headers"
    :items="houses"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
export default {
  // имя, адрес, изображение, стоимость недвижимости и ипотека.
  data () {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      headers: [
        { text: 'Name', value: 'name', align: 'start'},
        { text: 'Address', value: 'address'},
        { text: 'Property value', value: 'propValue'},
        { text: 'Mortgage', value: 'mortgage'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    houses: function (){
      return this.$store.getters.housesList
    }
  },
  methods: {
    async deleteItem (item) {
      await this.$store.dispatch('deleteHouse', this.houses.indexOf(item))
    },

  }
}
</script>
<style lang='sass'>
.v-data-table
  .v-data-table__wrapper
    table
      .v-data-table-header
        tr
          .text-start
            text-align: left
</style>
