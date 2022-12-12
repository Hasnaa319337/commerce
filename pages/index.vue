<template>
  <div>
    <Nav />
    <HomeCarsoual :sale_items="sale_items" />
    <br />
    <v-container>
      <h1 class="text-center">Check these out</h1>
      <br />
      <ProductSlider :products="products" />
      <br />
      <NewsLetter />
    </v-container>
    <Footer />
    <ScrollTopButton />
    
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
  async created() {
    this.products = await this.$content("products").fetch();
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
  },
};
</script>
