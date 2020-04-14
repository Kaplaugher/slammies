<template>
  <div>
    <div
      hidden
      id="snipcart"
      data-api-key="YWQxZjg0YjUtNmU1OC00NzczLWE3OGEtZDdjMWFmNTVjMjZhNjM3MjA4NDg1NDY1ODQxNTMw"
    ></div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style></style>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
