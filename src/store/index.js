import { createStore } from "vuex";
const store = createStore({
    state:{
        count: 0,
        name: "Ruchika",
        age: 24

    },
    mutations: {
       increment(state) {
            state.count++;
          },
         decrement(state) {
            state.count--;
          }
    },
    actions: {
        increment({commit}){
            commit("increment");
        },
        decrement({commit}){
            commit("decrement");
        }
    },
    getters: {
        getCount: (state) => state.count,
        upperCaseName: (state) => state.name.toUpperCase(),
        ageInFiveYears: (state) => state.age+5,
    }
})
export default store;