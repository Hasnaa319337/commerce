<template>
  <v-card tile falt class="text-center pa-md-10 pa-5" color="surface" >
    <h2 class="text-md-h6 font-weight-blod pointer">FreeCommerce</h2>
    <div class="text-center">
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="surface"
        class="mr-2"
        fab
        depressed
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "mdi-facebook", link: "#" },
        { icon: "mdi-instagram", link: "#" },
        { icon: "mdi-twitter", link: "#" },
        { icon: "mdi-youtube", link: "#" },
      ],
    };
  },
};
</script>

<style></style>
