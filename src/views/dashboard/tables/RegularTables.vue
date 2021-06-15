<template>
  <v-container
    id="regular-tables"
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
        :items-per-page="5"
        class="elevation-1"
      >
      </v-data-table>
      <div class="ma-4">
        <h1>Total :</h1>
        <p>{{ total }}</p>
      </div>
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
            text: 'Commande',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Date', value: '' },
          { text: 'Prix', value: '', sortable: false },
        ]
      }
    },
  }
</script>