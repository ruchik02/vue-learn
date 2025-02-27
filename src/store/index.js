import { createStore } from "vuex";
const store = createStore({
    state:{
        count: 0,
        name: "Ruchika",
        age: 24,
        todos: [],
    },
    mutations: {
       increment(state) {
            state.count++;
          },
         decrement(state) {
            state.count--;
          },
          addTodo(state,todo){
            state.todos.push(todo);

          },
          removeTodo(state,index){
            state.todos.splice(index,1);
          }
    },
    actions: {
        increment({commit}){
            commit("increment");
        },
        decrement({commit}){
            commit("decrement");
        },
        addTodo({commit},todo){
            commit("addTodo", todo);
        },
        removeTodo({commit}, index){
            commit("removeTodo", index);
        }

    },
    getters: {
        getCount: (state) => state.count,
        upperCaseName: (state) => state.name.toUpperCase(),
        ageInFiveYears: (state) => state.age+5,
        gettodos: (state) => state.todos,
    }
})
export default store;