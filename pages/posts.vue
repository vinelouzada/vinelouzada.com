<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          <nuxt-link :to="`/post/${post.slug}`">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>

  const posts = await queryContent('posts').find();

  //const posts  = await useAsyncData('home', () => queryContent('post').find())

  console.log(posts);


  </script>
  