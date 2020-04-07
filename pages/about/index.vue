<template>
  <div>
    <div class="py-24 md:py-40 hero ">
      <div class="px-32">
        <p class="text-4xl mb-8 text-white max-w-lg uppercase font-semibold">
          SlammieBrands is crafted for adventure seekers.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col items-center lg:flex-row lg:justify-center md:py-12 md:px-12"
    >
      <div class="lg:w-1/2 md:px-12">
        <img src="../../assets/slammies.jpeg" class="shadow-xl" />
      </div>
      <div class="lg:w-1/2 flex flex-col justify-center py-12 px-12">
        <h1 class="text-themegreen text-3xl">About Us</h1>
        <p class="py-8 text-lg font-semibold ">
          Here at Slammiebrands we are by no means professional athletes.The
          right word to describe us would be “the average joe”. Being “the
          average joe” we tend to take unnecessary risks, try new tricks, and
          mimic professionals because for some reason, we think we are better
          than we actually are.This mentality inevitably results in us wiping
          out, falling, bailing, crashing, and of course slamming. Now the idea
          of Slammiebrands didn’t come through a hard slam, wouldn’t that be
          awesome, but it came after we realized that we are all just a bunch of
          “Slammies”.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col items-center lg:flex-row lg:justify-center md:py-12 md:px-12"
    >
      <div class="lg:w-1/2 flex flex-col justify-center py-12 px-12">
        <p class="py-8 text-lg font-semibold ">
          We believe that if you’re not falling, you’re not trying. Therefore we
          always push ourselves to learn new skills, tricks, techniques and in
          general try new things. Our brand might be named after us Slammies but
          it also represents our ability to get back up as fast as we fell. We
          believe it’s important to pursue our passion. Improving our skills and
          understanding of our hobbies, disciplines and careers is something we
          strive for everyday. In order to do so, you must step outside your
          comfort zone and try the unknown. Whether it is snowboarding down some
          double blacks, hiking fourteeners, getting fit or drawing characters
          for stop motion movies, our passion is important to us and we want to
          wear it on our chest, literally. The team at SlammieBrands decided to
          create gear that is not only ridiculously comfy but represents who we
          are at our core. People who seek to better ourselves through personal
          challenges and perseverance.
        </p>
      </div>
      <div class="lg:w-1/2 md:px-12">
        <img src="../../assets/onmountain.jpg" class="shadow-xl" />
      </div>
    </div>
    <div class=" flex  py-32 px-6 bg-themeblue text-white">
      <p class="text-center text-2xl">
        Life is many things depending on what we make of it; if there's a common
        ground that most of us can agree on, it's that Life’s Short. Our mission
        is to empower the everyday individual to break out of their day to day
        routine, take risks, learn and to seek adventure by doing what they
        love.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 py-12">
      <div class="grid-card">
        <img
          src="../../assets/backpack.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="grid-card">
        <img
          src="../../assets/backpack.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="grid-card">
        <img
          src="../../assets/backpack.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/hiking.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.grid-card {
  height: 500px;
  max-height: 500px;
}
</style>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
