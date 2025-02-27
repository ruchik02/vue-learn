
<template>
    <v-container>
        <v-card>
            <v-card-title>Vuex Counter</v-card-title>
            <v-card-text>
                <h2>{{ $store.state.count }}</h2>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="$store.commit('increment')" color="primary">+</v-btn>
                <v-btn @click="$store.commit('decrement')" color="red">-</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>