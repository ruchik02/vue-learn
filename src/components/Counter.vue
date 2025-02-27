<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(["getCount"]),
        count(){
            return this.getCount;
        }
        // alternative
    //     count() {
    //   return this.$store.getters.getCount;
    // }
    },
    methods:{
        ...mapActions(["increment", "decrement"])
        // alternative
    //     incrementManually() {
    //   this.$store.dispatch("increment");
    // }
    }
}
</script>
<template>
    <v-container>
        <v-card>
            <v-card-title>Vuex Counter</v-card-title>
            <v-card-text>
                <h2>{{ count }}</h2>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="increment" color="primary">+</v-btn>
                <v-btn @click="decrement" color="red">-</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>