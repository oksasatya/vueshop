<template>
  <v-app>
    <v-app-bar app color="primary" dark extended>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-light">VueShop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-badge color="orange" overlap>
          <template v-slot:badge>
            <span>3</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-text-field
        slot="extension"
        append-icon="mdi-microphone"
        flat
        label="search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-card>
      <v-navigation-drawer app v-model="drawer">
        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list>
          <v-list-item
            v-for="(item, index) in menus"
            :key="`menu-` + index"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <template v-slot:append v-if="!guest">
          <div class="pa-2">
            <v-btn block color="red" dark @click="logout">
              <v-icon left>mdi-lock</v-icon>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-footer absolute app>
        <v-card-text class="text-center">
          &copy; {{ new Date().getFullYear() }} — <strong>Vueshop</strong>
        </v-card-text>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    menus: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "About", icon: "mdi-account", route: "/about" },
    ],
    guest: false,
  }),
};
</script>
