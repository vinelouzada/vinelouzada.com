<template>
    <div>
      <h1>Posts</h1>
        <ContentRenderer :value="post" />
    </div>
  </template>
  
  <script setup>

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.slug)
const post = await queryContent('posts').where({'slug': { $eq: route.params.slug }}).findOne();

console.log(post)

  //const posts  = await useAsyncData('home', () => queryContent('post').find())




  </script>
  