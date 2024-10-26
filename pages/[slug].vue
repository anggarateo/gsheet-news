<script lang="ts" setup>
const { params } = useRoute()

const detail = ref()
const { data } = await singleRow(+params.slug.split('-')[0] + 1)

detail.value = data.value?.values[0]
</script>

<template>
  <section>
    <Card
      :title="detail[1]"
      :image="detail[2]"
      :description="detail[3]"
    />
  </section>
</template>
