<template>
      <main>
            <section class="section-posts">
                <div>
                    <h2>Posts</h2>
                </div>
                <ul>
                    <li v-for="post in posts" :key="post.id">
                            <CardPost
                            :slug="post.slug" 
                            :title="post.title"
                            :date="post.date"
                            :abstract="post.abstract"
                            :banner="post.banner"
                            />
                    </li>
                </ul>
            </section>
        </main>
</template>
  
<script setup>
import CardPost from '~/components/CardPost.vue';

const posts = await queryContent('posts').find();

useHead({
    title: `Posts • vinelouzada`
})

</script>


<style scoped>

.layout{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main{
    margin: 0 auto;
    width: 75%;
    flex: 1;
}

h2 {
    font-size: 32px;
    font-weight: bold;
    margin: 20px 0;
}

.section-posts{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
}


.section-posts ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 20px;
}

</style>