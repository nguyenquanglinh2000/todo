import Vuex from 'vuex'
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../plugins/firebase'

const creteStore = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    actions: {

    },
    mutations: {
      async ADD_TODOS (state, payload) {
        // console.log('actions', payload)
        await addDoc(collection(db, 'todos'), {
          task: payload,
          statusChange: false,
          status: false
        })
        state.todos = []
        const dataTodos = await getDocs(collection(db, 'todos'))
        dataTodos.forEach((doc) => {
          // console.log(doc.data())
          const data = doc.data()
          data.id = doc.id
          state.todos.push(data)
        })
      },
      DELETE_ALL_TODOS (state) {
        state.todos = []
        // await deleteDoc(doc(db, 'todos'))
      },
      async DELETE_TASK (state, payload) {
        console.log(payload)
        await deleteDoc(doc(db, 'todos', payload))
        state.todos = []
        const dataTodos = await getDocs(collection(db, 'todos'))
        dataTodos.forEach((doc) => {
          // console.log(doc.data())
          const data = doc.data()
          data.id = doc.id
          state.todos.push(data)
        })
        // const stateNew = state.todos.filter(item => item.task !== payload)
        // state.todos = stateNew
      },
      async GET_TODOS (state) {
        // console.log('get todo')
        const dataTodos = await getDocs(collection(db, 'todos'))
        dataTodos.forEach((doc) => {
          // console.log(doc.data())
          const data = doc.data()
          data.id = doc.id
          state.todos.push(data)
        })
      },
      async UPDATE_TODOS (state, payload) {
        console.log(payload)
        await updateDoc(doc(db, 'todos', payload.idUpdate), {
          task: payload.update
        })
        state.todos = []
        const dataTodos = await getDocs(collection(db, 'todos'))
        dataTodos.forEach((doc) => {
          // console.log(doc.data())
          const data = doc.data()
          data.id = doc.id
          state.todos.push(data)
        })
      }
    },
    getters: {

    }
  })
}
export default creteStore
