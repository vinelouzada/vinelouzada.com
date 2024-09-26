<template>
    <section class="section-latest-articles">
        <div>
            <h2>Últimos Posts</h2>
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
</template>



<script setup>
import CardPost from './CardPost.vue';

const posts = await queryContent("posts").sort({'id': -1}).limit(3).find();

</script>
