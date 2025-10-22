<template>
  <section class="py-12 px-6 md:px-16 text-purple-950 bg-purple-50 pt-44">
    <h1 class="text-4xl font-extrabold mb-2">Tariff</h1>
    <!-- <p class="mb-4 text-sm opacity-90">
        Powerful Facilities with Best Quality of Services we provide Amazing rooms and Comfort.
      </p> -->
  </section>
  <div class="flex justify-center items-center bg-brand-purple">
    <iframe :src="pdfUrl" width="800" height="700" class="rounded-xl shadow-xl bg-white" title="PDF Viewer"></iframe>
  </div>
</template>

<script>
import pdf from '../../public/RajHotelTraiff.pdf';
export default {
  data() {
    return {
      // Place your PDF file in your public folder and set the path here:
      pdfUrl: pdf
    }
  }
}
</script>
