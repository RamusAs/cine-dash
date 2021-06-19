<template>
  <v-container
    id="Commandes Terminées "
    fluid
    tag="section"
  >
    <v-row justify="center">
      <div
        v-for="n in 5"
        :key="n"
      >
        <v-col
          cols="12"
          md="auto"
        >
          <base-material-card
            color="primary"
            class="px-5 py-3"
          >
            <template v-slot:heading>
              <div class="text-h3 font-weight-light">
                Table N° {{ n }}
              </div>
            </template>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="items"
                hide-default-footer
              />
              <v-checkbox
                v-model="checkbox1"
                label="Commande effectué"
              />
            </v-card-text>
          </base-material-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    //
  }
</script>
