<template>
    <a :href="'/post/' + slug">
        <section class="card-box">
            <img :src="`/assets/img/${banner}`" alt="Imagem de capa">
            <p class="date-article">{{formatDate(date)}}</p>
            <h3 class="title-article">{{title}}</h3>
            <p class="about-article">{{abstract}}</p>
        </section>
    </a>
</template>

<script>

import moment from 'moment';

export default {
    name: 'CardPost',
    props: {
        banner: String,
        title: String,
        date: String,
        abstract: String,
        slug: String
    },
    methods: {
        formatDate(date){
            moment.locale('pt-br');
            return moment(date).format("LL");
        }
    }
}

</script>

<style scoped>

a{
    text-decoration: none;
    color: inherit;
}

.card-box{
    display: flex;
    flex-direction: column;
    width: 300px;
}

.card-box img{
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-box h3 {
    font-size: 22px;
    font-weight: bold;
}

.date-article{
    margin-top: 5px;
    font-size: 14px;
}

</style>