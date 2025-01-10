<template>
    <section class="container-banner">
        <div class="container-banner-text">
            <h1 class="title">@vinelouzada</h1>
            <p class="description">Engenheiro de Computação, Dev Back-end e Designer</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Banner'
}


</script>


<style scoped>

.container-banner{
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../public/assets/img/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom
}

.container-banner-text{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title{
    color: white;
    font-size: 36px;
}

.description{
    color: white;
}

@media (max-width: 430px) {
  .container-banner-text{
    width: 85%;
    margin: 0 auto;
  }
}

</style>