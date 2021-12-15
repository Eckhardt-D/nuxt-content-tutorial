<template>
  <v-app-bar max-height="64">
    <div
      v-if="$route.name === 'index'"
      class="search d-flex align-center justify-end ml-auto"
    >
      <v-text-field
        v-model="search"
        type="search"
        hide-details="auto"
        dense
        placeholder="Search a post"
        prepend-icon="mdi-magnify"
        outlined
        :append-icon="search.length ? 'mdi-close' : ''"
        @click:append="clearSearch"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    search: '',
  }),
  methods: {
    clearSearch() {
      this.search = ''
    },
  },
}
</script>

<style></style>
