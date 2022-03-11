<template>
  <v-data-table
    :headers="headers"
    :items="tenants"
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
      headers: [
        { text: 'Name', value: 'name', align: 'start'},
        { text: 'Address', value: 'address'}, { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    tenants: function (){
      return this.$store.getters.tenantsList
    }
  },
  methods: {
    async deleteItem (item) {
      await this.$store.dispatch('deleteTenant', this.tenants.indexOf(item))
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
