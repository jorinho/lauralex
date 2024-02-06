<template>
  <h1 class="font-display text-center text-6xl font-bold text-white mx-8 md:text-8xl my-4 md:my-16">
    Hey ! On se marie !
  </h1>
  <div class="flex flex-row justify-center">
    <div class="border-8 border-red-900 rounded-3xl justify-between overflow-hidden w-[90vw] md:w-[75vw]">
      <img
          alt="Les Gorons"
          src="/img/image1.jpg"
          class="w-full object-cover sm:h-full"
      />
    </div>
  </div>
  <div class="flex flex-row justify-center text-white md:my-16 text-2xl m-8">
    <slot/>
  </div>
  <section class="flex flex-row justify-center px-12">
    <div class="grid md:grid-cols-3 md:max-w-7xl gap-8 py-8">
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image2.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">un nouveau matelas</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image3.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">cours de cuisine en couple</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image4.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">nouvelle vaisselle</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image5.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">voyage de noces en Laponie</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image7.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">future moto Alex</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image9.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">futur appart/maison</label>
      </div>
      <div class="flex flex-col p-8 bg-white border-8 border-red-900 rounded-3xl justify-between">
        <img src="/img/image11.png" alt="" class="block max-w-full max-h-full" />
        <label class="text-center text-red-900">futur bus/voiture familiale</label>
      </div>
    </div>
  </section>
  <div class="flex flex-row justify-center text-white md:my-16 text-2xl m-8">
    <div>
      Notre compte bancaire dans un paradis fiscal:<br><br>
      <p class="mb-2">iban: CH67 8080 8005 9900 4950 1</p>
      Laurane Poulin<br>
      Rue du Château 3<br>
      2023 Gorgier
    </div>
  </div>
  <div class="flex flex-row justify-center text-white md:my-16 text-2xl m-8">
    <div>
      <p class="mb-2">Tu peux aussi utiliser Twint avec ce numéro (c'est le numéro de Laurane):</p>
      <p class="text-center">079 920 94 60</p>
    </div>
  </div>
  <div class="flex flex-row justify-center text-white md:my-16 text-2xl m-8">
    On se réjouit de partager cette journée avec toi !<br>À bientôt !
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-page'
  },
})
</script>
<style>
.bg-page {
  background: #5A3F37;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C7744, #5A3F37);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C7744, #5A3F37); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
