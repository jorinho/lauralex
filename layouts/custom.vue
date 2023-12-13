<template>
  <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          Hey! On se marie!
        </h2>
        <slot class="text-gray-500 md:mt-4"/>
        <div class="mt-4 md:mt-8">
          <a
              href="#"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Jette un oeil!
          </a>
        </div>
      </div>
    </div>

    <img
        alt="Les Gorons"
        src="/img/image1.jpg"
        class="w-full object-cover sm:h-full"
    />
  </section>
  <section class="flex flex-row justify-center">
    <div class="grid md:grid-cols-3 md:max-w-7xl">
      <div class="flex justify-center flex-row p-8"><img src="/img/image2.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image3.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image4.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image5.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image6.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image7.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image8.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image9.png" alt="" class="block max-w-full max-h-full" /></div>
      <div class="flex justify-center flex-row p-8"><img src="/img/image11.png" alt="" class="block max-w-full max-h-full" /></div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
