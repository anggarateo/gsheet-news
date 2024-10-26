<script lang="ts" setup>
const list = ref<any>([])
const { data } = await allRows()

list.value = data.value?.values
</script>

<template>
  <div>
    <NuxtLink
      v-for="row in list"
      :key="row[0]"
      :to="`/${row[0]}-${encodeURIComponent(row[1])}`"
      class="card"
    >
      <Card
        :title="row[1]"
        :image="row[2]"
        :description="row[3]"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  margin-bottom: 4px;
  cursor: pointer;
  text-decoration: none;
}
</style>
