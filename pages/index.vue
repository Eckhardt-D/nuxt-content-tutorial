<template>
  <v-container fluid>
    <div class="intro my-5 mb-8">
      <h1 class="text-h1">Kaizen Codes Blog</h1>
      <h2 class="mt-2">
        100x Your Nuxt.js skills <span class="emoji">🚀</span>
      </h2>
    </div>
    <v-row class="posts-container mt-5">
      <v-col cols="12">
        <div class="filter">
          <v-select
            v-model="category"
            style="width: 100px"
            outlined
            dense
            hide-details="auto"
            :items="['all', 'code', 'lifestyle']"
          />
        </div>
      </v-col>
      <v-col v-for="post in 4" :key="post" cols="12" md="6">
        <v-card elevation="0">
          <v-card-title> My first blog post </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi
            vel eos cum sit accusantium cumque dolor id dolore consequatur fuga
            nihil minus sed, consequuntur labore quas ipsum facere molestias.
          </v-card-text>
          <v-card-actions>
            <v-btn text to="/1">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="post-pagination">
      <v-col class="text-right" cols="12">
        <v-btn>
          <v-icon small> mdi-arrow-left </v-icon>
          Previous
        </v-btn>
        <v-btn>
          Next
          <v-icon small> mdi-arrow-right </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'HomeLayout',
  data: () => ({
    category: 'all',
  }),
}
</script>

<style>
.emoji {
  font-weight: 100;
}
</style>
