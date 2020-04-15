<template>
  <nav class="flex justify-around items-center bg-dark h-20 px-6">
    <div class="flex">
      <div class="text-lg font-semibold ">
        <nuxt-link
          exact
          to="/"
          class=" mt-4 lg:inline-block lg:mt-0 text-themewhite hover:text-themegreen mr-4"
        >
          Home
        </nuxt-link>
      </div>
      <div class="text-lg font-semibold ">
        <nuxt-link
          exact
          to="/about"
          class=" mt-4 lg:inline-block lg:mt-0 text-themewhite hover:text-themegreen mr-4"
        >
          About
        </nuxt-link>
      </div>
      <div class="text-lg font-semibold ">
        <nuxt-link
          exact
          to="/contact"
          class=" mt-4 lg:inline-block lg:mt-0 text-themewhite hover:text-themegreen mr-4"
        >
          Contact
        </nuxt-link>
      </div>
    </div>

    <div class="flex">
      <nuxt-link to="/" class="z-1">
        <img src="../assets/slamlight.png" alt="logo" class=" h-12 md:h-16" />
      </nuxt-link>
    </div>

    <div class="flex items-center ml-8 ">
      <img
        src="../assets/shopping-cart.svg"
        alt=""
        class="snipcart-checkout cursor-pointer"
      />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
