<template>
  <v-card rounded="lg" class="text-center pa-5 pa-md-10" color="primary" dark>
    <h2 class="text-md-h3">NewsLetter</h2>
    <p class="text-md-h6 mt-5">subscribe to recieve Discounts & More!</p>
    <br />
    <v-sheet color="transparent" class="mx-auto" max-width="400">
      <v-text-field
        label="Email"
        type="email"
        outlined
        v-model="email"
      ></v-text-field>
      <v-btn outlined click min-height="50" width="400" @click="submit"> Subscribe</v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async submit() {
      if(this.email !== ''){
        await this.$swal({
        title: "Thank you for subscribing",
        icon: "success",
        allowOutsideclick: false,
        allowEscapeKey: false,
        timer: 4000,
        timerProgressBar: true,
        text: "You will be notified when we have a deal or items on sale.",
        showConfirmButton: false,
      });
      }
      
    },
  },
};
</script>

<style></style>
