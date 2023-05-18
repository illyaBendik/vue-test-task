<template>
  <div class="w-full max-w-screen-xl mx-auto mt-5">
    <router-link class="text-lg mb-4 text-red-600" :to="{ name: 'task1' }"
      >Go To Task1</router-link
    >
    <convert-form
      :list-currencies="listCurrencies"
      :items="selectedItems"
    ></convert-form>

    <hr class="mt-2" />
    <p class="block my-4 text-sm font-medium text-gray-900">Select Item:</p>
    <p
      v-for="(selectItem, key) in selectedItems"
      :key="key"
      class="block my-4 text-sm font-medium text-green-900"
    >
      {{ selectItem.currency }} {{ selectItem.price }}
    </p>

    <hr />
    <h1 class="block my-4 text-lg font-medium text-gray-900">List Currency</h1>
    <ul role="list" class="divide-y divide-gray-100">
      <li
        class="flex justify-between gap-x-6 py-5"
        v-for="(item, key) in listItems"
        :key="key"
      >
        <div class="flex gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              Currency: {{ item.currency }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              Price: {{ item.price }}
            </p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <div class="flex items-center">
            <input
              type="checkbox"
              @click="addItem(item)"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ConvertForm from "@/components/ConvertForm.vue";
import { ref, computed } from "vue";

const selectedItems = ref([]);
const listItems = [
  {
    id: 1,
    price: 500,
    currency: "USDT",
  },
  {
    id: 2,
    price: 700,
    currency: "BTC",
  },
  {
    id: 3,
    price: 900,
    currency: "ETH",
  },
  {
    id: 4,
    price: 1000,
    currency: "BTC",
  },
  {
    id: 5,
    price: 1200,
    currency: "USDT",
  },
];

const listCurrencies = computed(() => {
  const data = listItems.map((item) => item.currency);
  return [...new Set(data)];
});

const addItem = (selectedItem) => {
  const index = selectedItems.value.findIndex(
    (item) => item.id === selectedItem.id
  );
  if (index === -1) {
    selectedItems.value.push(selectedItem);
  } else {
    selectedItems.value.splice(index, 1);
  }
};
</script>
