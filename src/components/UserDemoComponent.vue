<template>
  <div class="wrapper">
    <p>{{ state.user?.name }}:</p>
    <slot name="loading" v-if="state.isLoading"></slot>
    <slot name="user" v-else :user="state.user"></slot>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'

export default {
  name: 'UserDemoComponent',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      user: null,
      isLoading: true
    })

    onMounted(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name=${props.username}`
      )
      const users = await response.json()
      state.user = users[0]
      state.isLoading = false
    })

    return { state }
  }
}
</script>
<style>
.wrapper {
  border: 1px solid gray;
  padding: 10px;
}
</style>
