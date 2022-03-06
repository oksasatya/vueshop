<template>
  <div>
    <!-- template categories -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/categories" class="blue--text">
          All categories <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex
          v-for="category in categories"
          :key="`category-` + category.id"
          xs6
        >
          <v-card :to="'/category/' + category.slug">
            <v-img
              :src="'http://127.0.0.1:8000/images/categories' + category.image"
              class="white--text"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="category.name"
              ></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- template books -->

    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/books" class="blue--text">
          All Books <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex v-for="book in books" :key="`book-` + book.id" xs6>
          <v-card :to="'/book/' + book.slug">
            <v-img :src="book.cover" class="white--text">
              <v-card-title class="fill-height align-end" v-text="book.title">
              </v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    books: [
      {
        id: 1,
        cover: "http://via.placeholder.com/150",
        title: "laravel 5.8",
        slug: "laravel-5.8",
      },
      {
        id: 2,
        cover: "http://via.placeholder.com/150",
        title: "vuejs 2",
        slug: "vuejs-2",
      },
      {
        id: 3,
        cover: "http://via.placeholder.com/150",
        title: "php 7",
        slug: "php-7",
      },
      {
        id: 4,
        cover: "http://via.placeholder.com/150",
        title: "nodejs",
        slug: "nodejs",
      },
    ],
    categories: [],
  }),
  created() {
    console.log("get data categories");

    this.axios
      .get("/categories/random/5")
      .then((response) => {
        let { data } = response.data;
        this.categories = data;
      })
      .catch((error) => {
        let { response } = error;
        console.log(response);
      });
  },
};
</script>
