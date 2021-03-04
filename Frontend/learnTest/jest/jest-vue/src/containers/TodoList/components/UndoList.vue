<template>
  <div class="UndoList">
    <div>
      <div data-test='count'>{{list.length}}</div>
      <ul>
        <li v-for='(item,index) in list' :key='index' data-test='item'>
          {{item}}
          <span data-test='delete' @click='handleDelete(index)'>删除按钮</span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  data() {
    return {
    }
  },
  props: ['list'],
  methods: {
    handleDelete(index) {
      console.log('asdf')
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
