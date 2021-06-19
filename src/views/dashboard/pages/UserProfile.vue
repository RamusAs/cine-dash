<template>
  <v-container
    id="Commandes Terminées "
    fluid
    tag="section"
  >
    <!-- <v-row justify="center">
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
    </v-row> -->
    <v-data-table
      v-model="selected"
      :headers="commandetHeaders"
      :items="commandes"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      show-select
      single-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-btn
          v-if="selected.length"
          color="primary"
          dark
          class="mb-2"
          @click="valider"
        >
          Valider
        </v-btn>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    v-for="(h, i) in produitHeaders"
                    :key="i"
                    class="text-left"
                  >
                    {{ h.text }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="produit in item.produits"
                  :key="`${produit.libelle}${item.id}`"
                >
                  <td
                    v-for="(h, i) in produitHeaders"
                    :key="i"
                  >
                    {{ produit[h.value] }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import { GetAll, ValideMany } from '@/api/commande'

  export default {
    data () {
      return {
        expanded: [],
        selected: [],
        singleExpand: false,
        commandetHeaders: [
          {
            text: 'Nom',
            align: 'start',
            sortable: false,
            value: 'user.nom',
          },
          {
            text: 'Prenom',
            align: 'start',
            sortable: false,
            value: 'user.prenoms',
          },
          { text: '', value: 'data-table-expand' },
        ],
        produitHeaders: [
          { text: 'Libelle', value: 'libelle' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Prix', value: 'price' },
          { text: 'Saveur', value: 'saveur' },
          { text: 'Taille', value: 'taille' },
          { text: 'Type', value: 'type' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        commandes: [],
      }
    },
    async mounted () {
      this.getData()
      setInterval(this.getData, 60000)
    },
    methods: {
      async getData () {
        try {
          this.commandes = (await GetAll()).data
        } catch (error) {
          //
        }
      },
      async valider () {
        try {
          await ValideMany(this.selected.map(el => el.id))
          await this.getData()
          this.selected = []
        } catch (error) {
          //
        }
      },
    },
  }
</script>
