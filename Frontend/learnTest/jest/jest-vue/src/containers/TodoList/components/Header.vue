<template>
  <div class="header">
    <input data-test='input' v-model='inputValue' @keyup.enter='addTodoItem'>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem() {
      if(this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header {
  background-color: blue;
}
</style>
