<script setup lang="ts">
  import {ref} from 'vue'
  const num =ref(2)
</script>

<template>
  <div>
    {{num}}
    <button @click="num++">增加</button>
  </div>
</template>

<style scoped>
  div{
    color: red;
  }
</style>
