<template>
  <div>
    <Nav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            outlined
            clearable
            placeholder="search"
            v-model="search"
          />
          <v-list
            subheader
            color="transparent"
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <v-subheader>Categories</v-subheader>
            <v-list-item v-for="(c, i) in category" :key="i" link>
              <v-list-item-avatar>
                <v-img :src="c.image" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ c.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="9">
          <v-row>
            <template v-for="(p, index) in filterProducts">
              <v-col cols="12" md="6" :key="index">
                <v-card link color="surface" class="el ma-2 mb-5 mr-5">
                  <v-img :src="p.image" height="300">
                    <template #placeholder>
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-progress-circular
                          width="2"
                          size="100"
                          color="primary"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-title class="text-md-body-1 fomt-weight-blod">{{
                    p.name
                  }}</v-card-title>
                  <v-card-subtitle class="primary--text pb-3">
                    {{ p.price }}
                  </v-card-subtitle>
                  <v-card-text>
                    <v-chip
                      x-small
                      label
                      outlined
                      class="mr-1"
                      v-for="(tag, i) in p.tags"
                      :key="i"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <ScrollTopButton />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      products: null,
      category: null,
      search:null,
    };
  },
  async created() {
    this.products = await this.$content("products").fetch();
    this.category = await this.$content("category").fetch();
  },
  computed:{
    filterProducts(){
        if(!this.search || !this.products) return this.products || [];
        return this.products.filter((p)=>{
            const s =this.search.toLowerCase();
            const n = p.name.toLowerCase();
            const price = p.price.toString();
            const salePrice = p.salePrice ?.toString() || '';
            const r = p.ratings.toString()

            return n.includes(s) || price.includes(s) || salePrice.includes(s) || r.includes(s)
        })
    }
  },
};
</script>

<style></style>
