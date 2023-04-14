<template>
  <UserDemoComponent :username="name">
    <template #loading> Loading... </template>
    <template #user="{ user }"> <BadgeItem :address="user.address"></BadgeItem></template>
  </UserDemoComponent>
</template>
<script>
import UserDemoComponent from '../components/UserDemoComponent.vue'
import BadgeItem from '../components/BadgeItem.vue'
import { ref } from 'vue'
export default {
  components: {
    UserDemoComponent,
    BadgeItem
  },
  setup() {
    const name = ref('Leanne Graham')
    return {
      name
    }
  }
}
</script>
