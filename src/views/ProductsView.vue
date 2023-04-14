<template>
  <div>
    <p class="loading" v-if="loading">Loading ...</p>
    <div v-else class="product-list">
      <select v-model="sortOption" @change="sortProducts">
        <option value="">Сортировать по:</option>
        <option value="price">Цене</option>
        <option value="count">Количеству</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in paginatedProducts" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.count }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button v-if="currentPage > 1" @click="currentPage--">Назад</button>
        <div class="page-number">Page: {{ currentPage }}</div>
        <button v-if="currentPage < totalPages" @click="currentPage++">Вперед</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'ProductList',
  setup() {
    const currentPage = ref(1)
    const pageSize = ref(5)
    const products = ref([])
    const sortOption = ref('')
    const loading = ref(false)

    const loadProducts = async () => {
      try {
        loading.value = true

        const response = await fetch('/_mock/products.json')
        const data = await response.json()

        await new Promise((resolve) => setTimeout(resolve, 1000))

        products.value = data
        loading.value = false
      } catch (error) {
        loading.value = false
      }
    }

    const paginatedProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value
      const endIndex = startIndex + pageSize.value
      return sortedProducts.value.slice(startIndex, endIndex)
    })

    const totalPages = computed(() => {
      return Math.ceil(sortedProducts.value.length / pageSize.value)
    })

    const sortedProducts = computed(() => {
      if (sortOption.value === 'price') {
        return [...products.value].sort((a, b) => a.price - b.price)
      } else if (sortOption.value === 'count') {
        return [...products.value].sort((a, b) => a.count - b.count)
      }
      return products.value
    })

    const sortProducts = () => {
      currentPage.value = 1
    }

    onMounted(loadProducts)

    return {
      currentPage,
      pageSize,
      products,
      sortOption,
      loading,
      paginatedProducts,
      totalPages,
      sortProducts
    }
  }
}
</script>

<style>
.loading {
  text-align: center;
  font-size: 40px;
  color: #fff;
}
.product-list {
  margin: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  color: black;
}

select {
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.page-number {
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>
