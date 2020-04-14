<template>
  <div class="wrapper ">
    <div class="grid grid-cols-2 gap-8">
      <div class="left">
        <div class="h-600px">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
        <div>
          Here are img previews
        </div>
      </div>
      <div class="flex flex-col justify-around">
        <h1>Here is item title</h1>
        <span>here is some info</span>
        <div class="flex">
          <span>Here are stars</span>
          <a>write a review</a>
        </div>
        <h2>Color</h2>
        <div class="flex colors">
          <div class="w-10 h-10 rounded-full mr-4 bg-themeblue" />
          <div class="w-10 h-10 rounded-full mr-4 bg-themegreen" />
          <div class="w-10 h-10 rounded-full mr-4 bg-dark" />
        </div>
        <h2>Choose a size</h2>
        <v-select :options="options" class="w-40"></v-select>
        <button
          class="w-40 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-themegreen"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["neener", "peener"]
    };
  }
};
</script>

<style scoped></style>
