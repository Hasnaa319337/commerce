<template>
  <v-fab-transation>
    <v-btn
    fixed
    right
    bottom
    fab
    @click="goUp"
    color="primary"
    v-scroll="checkScroll"
    v-show="showFab"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
  </v-fab-transation>
  
</template>

<script>
export default {
  data() {
    return {
      showFab: false,
    };
  },
  methods: {
    checkScroll() {
      const y = window.scrollY;
      if (y > 300) {
        this.showFab = true;
      }
      else{
        this.showFab=false
      }
    },
    goUp(){
      this.$vuetify.goTo(0,{
        duration:1000
      })
    }
  },
};
</script>

<style></style>
