<template>
      <main>
        <Banner />
        <section class="content">
          <LastestPosts />
          <section class="section-project">
            <h2>Projetos</h2>
            <div class="projects">
              <CardProject 
                :title="'Removedor de ruídos periódicos em imagens'"
                :description="'Aplicação que utiliza a Transformada de Fourier e Filtro Rejeita Notch Butterworth para remover ruídos periódicos de imagens.'"
                :url="'https://github.com/vinelouzada/filtro-rejeita-faixa-butterworth/blob/main/Trabalho_Pr%C3%A1tico_PDS.ipynb'"
                :image="'/assets/img/seiya.png'"
              />
            </div>
          </section>
        </section>
      </main>
</template>
    
    <script>
    import LastestPosts from '~/components/LastestPosts.vue';
    import Banner from '../components/Banner.vue';
    import CardProject from '~/components/CardProject.vue';
    
    export default {
        metaInfo: {
            title: 'Início'
        },
        components: { Banner, CardProject, LastestPosts}
    }
    </script>
    
    <style>

    
    body{
      background-color: #1E293B;
      background-color: #fff;
    }
    
    .home-links a {
      margin-right: 1rem;
    }
    
    .projects{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    
    </style>
    