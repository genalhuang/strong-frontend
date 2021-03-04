<template>
  <div class="hello">
    <h1>TodoList</h1>
    <Header @add='addUndoItem'></Header>
    <!-- <ul>
      <li v-for='item in undoList' :key='item'>{{item}}</li>
    </ul> -->
    <UndoList :list="undoList" @delete='handleItemDelete'></UndoList>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import UndoList from './components/UndoList.vue'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data() {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue)
    },
    handleItemDelete(index) {
      console.log(index)
      this.undoList.splice(index,1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
