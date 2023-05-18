<template>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900"
      >Select an currency to convert</label
    >
    <div class="flex">
      <select
        id="countries"
        v-model="selectCurrency"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option
          :value="currency"
          v-for="(currency, key) in listCurrencies"
          :key="key"
        >
          {{ currency }}
        </option>
      </select>
      <button
        type="button"
        :disabled="!items.length"
        @click="convert"
        class="ml-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Convert
      </button>
    </div>

    <p class="block my-4 text-sm font-medium text-red-900" v-if="result">
      Result: {{ result }} {{ selectCurrency }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { CurrencyPairs } from "@/constants/currencyPairs.js";
const DEFAULT_CURRENCY = "USDT";

const props = defineProps({
  listCurrencies: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const result = ref("");
const selectCurrency = ref(DEFAULT_CURRENCY);

const convert = () =>
  (result.value = getTotalPrice(props.items, selectCurrency.value));

const getItemPrice = (item, targetCurrency) => {
  const itemCurrency = item.currency;
  const itemPrice = item.price;

  if (itemCurrency === targetCurrency) {
    return itemPrice;
  }

  const pairKey = `${itemCurrency}-${targetCurrency}`;
  if (!(pairKey in CurrencyPairs)) {
    const reversePairKey = `${targetCurrency}-${itemCurrency}`;
    if (!(reversePairKey in CurrencyPairs)) {
      return null;
    }

    return itemPrice / CurrencyPairs[reversePairKey];
  }

  return itemPrice * CurrencyPairs[pairKey];
};

const getTotalPrice = (items, targetCurrency) => {
  let totalPrice = 0;

  items.forEach((item) => {
    const itemPrice = getItemPrice(item, targetCurrency);
    if (itemPrice !== null) {
      totalPrice += itemPrice;
    }
  });

  return totalPrice;
};
</script>
