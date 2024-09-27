<template>
    <div class="container-card-project">
        <div class="card-project-image">
            <img :src="image">
        </div>
        <div class="card-project-description">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <a class="button-project" :href="url" target="_blank">Confira o projeto</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardProject',
    props:{ 
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>

.container-card-project {
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.card-project-image{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-project-image img{
    width: 250px;
    height: 250px;
}

.card-project-description{
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-top: 20px;
    gap: 15px;
}

h3{
    font-size: 22px;
    font-weight: bold;
}

.button-project{
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: blueviolet;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 50%;
}

.button-project:hover {
    background-color: #18181B;
}

@media (max-width: 1100px){
    .container-card-project {
        gap: 0;
    }
}
</style>