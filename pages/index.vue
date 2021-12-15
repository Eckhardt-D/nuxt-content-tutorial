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
      <v-col v-for="post in posts" :key="post.slug" cols="12" md="6">
        <v-card elevation="0">
          <v-card-title> {{ post.title }}</v-card-title>
          <v-card-subtitle>{{
            new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            }).format(new Date(post.updatedAt))
          }}</v-card-subtitle>
          <v-card-text>
            <nuxt-content :document="{ body: post.excerpt }" />
          </v-card-text>
          <v-card-actions>
            <v-btn text :to="post.path">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="post-pagination">
      <v-col class="text-right" cols="12">
        <v-btn :disabled="page === 1" @click="fetchPrevious">
          <v-icon small> mdi-arrow-left </v-icon>
          Previous
        </v-btn>
        <v-btn :disabled="!nextPage" @click="fetchNext">
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
  async asyncData({ $content }) {
    const page = 1
    const limit = 5

    const fetchedPosts = await $content()
      .limit(limit)
      .sortBy('updatedAt', 'desc')
      .skip((limit - 1) * (page - 1))
      .fetch()

    const nextPage = fetchedPosts.length === limit
    const posts = nextPage ? fetchedPosts.slice(0, -1) : fetchedPosts

    return {
      page,
      limit,
      posts,
      nextPage,
    }
  },
  data: () => ({
    category: 'all',
  }),

  methods: {
    async fetchNext() {
      this.page += 1
      await this.fetchPosts()
    },
    async fetchPrevious() {
      this.page -= 1
      await this.fetchPosts()
    },
    async fetchPosts() {
      const fetchedPosts = await this.$content()
        .limit(this.limit)
        .sortBy('updatedAt', 'desc')
        .skip((this.limit - 1) * (this.page - 1))
        .fetch()

      this.nextPage = fetchedPosts.length === this.limit
      const posts = this.nextPage ? fetchedPosts.slice(0, -1) : fetchedPosts
      this.posts = posts
    },
  },
}
</script>

<style>
.emoji {
  font-weight: 100;
}
</style>
