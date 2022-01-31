<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      extended
    >
    
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
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

          <v-text-field slot="extension" append-icon="mdi-microphone" flat label="search" prepend-inner-icon="mdi-magnify"></v-text-field>
        
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
          <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
