<template>
  <section class="text-white py-16 px-4 bg-gradient-to-r from-[#0D0D2B] to-[#1A1A3D]">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <!-- Text Side -->
      <div class="flex-1">
        <h4 class="text-sm text-blue-400 font-medium mb-2">Featured</h4>
        <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Solidity: Beginner to <br class="hidden md:block" />
          Intermediate Smart Contracts
        </h1>
        <p class="text-gray-300 text-lg mb-6">
          Get up to speed with the basics of Solidity.
        </p>
        <button class="bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-2 rounded-md font-bold shadow hover:opacity-90">
          Start Course
        </button>
      </div>


       <!-- Image Side -->
    <div class="flex-1 flex justify-center">
    <img :src="getAvatarPath" alt="Avatar" class="w-56 h-56 object-contain drop-shadow-xl" />
    </div>

    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeroSection',
  computed: {
    ...mapState(['selectedAvatar']),
    getAvatarPath() {
      return require(`@/assets/avatars/${this.selectedAvatar}`);
    }
  }
};
</script>




