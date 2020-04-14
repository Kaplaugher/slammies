<template>
  <div>
    <section id="banner">
      <div class="block md:flex">
        <div class="lg:w-1/2 xl:w-2/3 h-64 md:h-600px">
          <img
            src="../assets/surf.jpg"
            alt="surfer"
            class="object-cover h-full"
          />
        </div>
        <div
          class="description xl:w-1/3 lg:w-1/2 xl:max-w-xl flex flex-col justify-around p-8"
        >
          <h1
            class="my-2 text-3xl lg:text-4xl xl:text-6xl font-bold text-themegreen"
          >
            Slammiebrands
          </h1>
          <p class="my-2 lg:text-xl font-semibold">
            With the launch of our website we have designed 3 inaugural
            products. With one of our passions being snowboarding the team has
            created a “Life’s short, Shred it” line of items. These include a
            sweatshirt, t-shirt, and sticker! More products are to follow so
            please be patient with us! In the meantime let us leave you with a
            quote to inspire you.
          </p>
          <h1 class="italic text-base text-lg font-semibold">
            “So we shall let the reader answer this question for himself: who is
            the happier man, he who has braved the storm of life and lived or he
            who has stayed securely on shore and merely existed?” — Hunter S.
            Thompson
          </h1>
        </div>
      </div>
    </section>

    <Emails />

    <h1 class="text-4xl text-themeblue font-semibold text-center mt-4">
      Gear up for your next adventure
    </h1>

    <div class="products grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-12 px-6">
      <nuxt-link to="/products/thingy" class=".cursor-pointer">
        <ProductCard
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-once="true"
        />
      </nuxt-link>
      <nuxt-link to="/products/thingy" class=".cursor-pointer">
        <ProductCard
          data-aos="flip-left"
          data-aos-delay="700"
          data-aos-once="true"
        />
      </nuxt-link>
      <nuxt-link to="/products/thingy" class=".cursor-pointer">
        <ProductCard
          data-aos="flip-left"
          data-aos-delay="900"
          data-aos-once="true"
        />
      </nuxt-link>
    </div>

    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div
          class=""
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <h2
            class="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-themegreen"
          >
            Our Stuff is Cool
          </h2>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>

        <div
          class="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div class="">
            <h3
              class="text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9"
            >
              Super comfy
            </h3>
            <p class="mt-3 text-lg leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium">
                      Sweet Designs
                    </h5>
                    <p class="mt-2 text-base leading-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium">
                      Other Stuff
                    </h5>
                    <p class="mt-2 text-base leading-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium">
                      Poppy Cock
                    </h5>
                    <p class="mt-2 text-base leading-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="h-full"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <img
              class="object-cover h-full"
              src="../assets/snowboarding.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="mt-12 sm:mt-16 lg:mt-24">
          <div
            class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
              <h3
                class="text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9"
              >
                Party On
              </h3>
              <p class="mt-3 text-lg leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium">
                        Stuff
                      </h5>
                      <p class="mt-2 text-base leading-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium">
                        Other Stuff
                      </h5>
                      <p class="mt-2 text-base leading-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div
              class="h-full"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <img class="object-cover" src="../assets/onmountain.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Emails from "~/components/Emails";
import ProductCard from "~/components/ProductCard";

export default {
  components: {
    Emails,
    ProductCard
  }
};
</script>

<style>
.products {
  justify-items: center;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
