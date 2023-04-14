<template>
  <div>Address: {{ fullAddress }}</div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const fullAddress = computed(() => {
      return `${props.address.street} ${props.address.suite} ${props.address.city} ${props.address.zipcode}`
    })

    return {
      fullAddress
    }
  }
}
</script>
