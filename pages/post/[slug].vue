<template>
      <main>
        <section class="content-post">
            <div class="banner-post">
              <img :src="`/assets/img/${post.banner}`">
            </div>
            <article>
                <h2>{{post.title}}</h2>
                <ContentRendererMarkdown :value="post" />
            </article>
        </section>
      </main>
</template>
  
<script setup>

const route = useRoute()
const post = await queryContent('posts').where({'slug': { $eq: route.params.slug }}).findOne();

useHead({
    title: `${post.title} • vinelouzada`
})

useSeoMeta({
  title: `${post.title}`,
  ogTitle: `${post.title}`,
  description: `${post.description}`,
  ogDescription: `${post.description}`,
  ogImage: `/assets/img/${post.banner}`
})

</script>
  

<style>

.content-post {
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 50%;
}

pre{
  background-color: #141414;
  padding: 10px;
  border-radius: 10px;
  overflow-x: auto;
  margin: 10px 0;
}

.banner-post{
  width: 100%;
  height: 200px;
  margin-top: 20px;
}

.banner-post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 a{
  text-decoration: none;
  color: #000;
}

@media (max-width: 750px) {
  .content-post {
    width: 90%;
  }
}


</style>