<script lang="ts" setup>
defineProps<{
  title?: string,
  description?: string,
  image?: string
}>()
</script>

<template>
  <section>
    <img
      width="250"
      height="190"
      :src="image"
      :alt="title"
      decoding="async"
      loading="lazy"
    >

    <div>
      <h1>{{ title }}</h1>

      <p>{{ description }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: block;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 20px;
  box-shadow: 0 2px 2px 0 gray;
  gap: 20px;
  
  &:hover {
    background: #f5f5f5;
  }
}

@media (min-width: 1024px) {
  section {
    display: flex;
    align-items: center;
  }
}

h1 {
  margin-bottom: 10px;
  font-weight: bolder;
}

section:hover h1 {
  text-decoration: underline;
}

p {
  color: black;
}
</style>
