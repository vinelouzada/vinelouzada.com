<template>
    <Header />
      <NuxtPage />
    <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';



</script>

<style>
@import url("public/assets/css/reset.css");
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
    
header, footer, .date-article, .button-project{
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
}

#__nuxt{
  display: flex;
    flex-direction: column;
    min-height: 100vh;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 65%;
}

.section-latest-articles{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
}

.section-latest-articles ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex-wrap: wrap;
}

h2 {
    font-size: 42px;
    font-weight: bold;
    margin: 20px 0;
}
</style>
