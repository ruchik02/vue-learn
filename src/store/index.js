import { createStore } from "vuex";
const store = createStore({
    state:{
        count: 0,

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

    },
    getters: {
        getCount: (state) => state.count
    }
})
export default store;