<template>
  <div class="bodyTodo">
    <div class="row">
      <v-col cols="6" offset="3">
        <v-card outlined>
          <v-list>
            <v-list-item v-for="(item, index) in listTodos" :key="index" class="itemTodo">
              <v-row v-if="index !== indexChange">
                <v-col cols="1">
                  <v-checkbox v-model="item.status" color="green" />
                </v-col>
                <v-col v-if="!item.status" cols="9" class="my-5" @click="change(index, item.id)">
                  {{ item.task }}
                </v-col>
                <v-col v-else cols="9" class="my-5" style="text-decoration-line: line-through" @click="change(index)">
                  {{ item.task }}
                </v-col>
                <v-col cols="2" class="my-2">
                  <v-btn icon color="red" @click="deleteTask(item.id)">
                    <v-icon>
                      mdi-close-circle
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-else>
                <v-col cols="10">
                  <v-text-field v-model="update" label="Nhập thay đổi" />
                </v-col>
                <v-col cols="2">
                  <v-btn icon color="blue" class="my-5" @click="updateTodos({update, idUpdate})">
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                  <v-btn icon color="red" @click="cancel">
                    <v-icon>
                      mdi-close
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" offset="3">
        <v-btn @click="deleteAll">
          DeleteAll
        </v-btn>
      </v-col>

      <v-col cols="6" offset="3">
        <form @submit.prevent="addTodos">
          <v-text-field v-model="todoV" outlined label="Nhập gì đó đi!!" />
          <v-btn type="submit">
            Thêm task mới
          </v-btn>
        </form>
      </v-col>
    </div>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
// import { db } from '../plugins/firebase'
export default {
  data () {
    return {
      todoV: '',
      indexChange: '',
      update: '',
      idUpdate: ''
      // listTodos: []
    }
  },
  created () {
    this.$store.commit('GET_TODOS')
  },
  mounted () {
    // console.log('mounted')
    // this.$store.commit('GET_TODOS')
    // this.$store.state.todos.forEach((item) => {
    //   this.listTodos.push(item.task)
    // })
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    // ...mapState(['todos']),
    listTodos () {
      console.log(this.$store.state.todos)
      return this.$store.state.todos
    }
  },
  methods: {
    // ...mapActions(['DELETE_STATE']),
    addTodos () {
      if (this.todoV) {
        // this.listTodos.push(this.todoV)
        this.$store.commit('ADD_TODOS', this.todoV)
        this.todoV = ''
      } else {
        alert('Hãy nhập gì đó!')
      }
    },
    deleteAll () {
      this.$store.commit('DELETE_ALL_TODOS')
    },
    deleteTask (id) {
      // console.log(id)
      this.$store.commit('DELETE_TASK', id)
    },
    change (index, id) {
      this.indexChange = index
      // console.log(id)
      this.idUpdate = id
    },
    cancel () {
      this.indexChange = ''
    },
    updateTodos (payload) {
      this.$store.commit('UPDATE_TODOS', payload)
      this.indexChange = ''
      this.update = ''
    }
  }
}
</script>
<style scoped>

</style>
