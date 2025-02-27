<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            newTodo: "",
        }
    },
    computed: {
        ...mapState(["todos"]),
    },
    methods: {
        ...mapActions(["addTodo", "removeTodo"]),
        addNewTask() {
            if (this.newTodo.trim() !== "") {
                this.addTodo(this.newTodo); // add todo to Vuex
                this.newTodo = ""; //  Clear input after adding
            }
        }
    }
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-text-field v-model="newTodo" label="Add Task"></v-text-field>
            </v-col>
            <v-col cols="12" class="d-flex">
                <v-btn @click="addNewTask" color="green">ADD TASK</v-btn>
            </v-col>
        </v-row>
        <v-divider class="mt-4"></v-divider>
        <v-list>
            <v-list-item v-for="(todo, index) in todos" :key="index">
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <span class="text-h6">{{ todo }}</span>
                        </v-col>
                       
                        <v-col cols="4" class="d-flex justify-end">
                            <v-btn @click="removeTodo(index)" color="red">DELETE</v-btn>
                        </v-col>
                    </v-row>
                    <v-divider class="mt-2"></v-divider>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>
