<template>
  <v-container
    id="statistique-tables"
    fluid
    tag="section"
  >

    <base-material-card
      color="primary"
      icon="mdi-clipboard-text"
      title="Commandes Terminées"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        hide-default-footer
      >
      </v-data-table>
    </base-material-card>

    <div class="py-3" />
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Article',
            align: 'start',
            sortable: false,
            value: '',
          },
          { text: 'Quantité total', value: '' },
          { text: 'Quantité vendu', value: '', sortable: false },
          { text: 'Quantité restante', value: '', sortable: false },
          { text: 'En stock', value: '', sortable: false },
        ]
      }
    },
  }
</script>