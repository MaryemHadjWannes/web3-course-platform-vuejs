<template>
  <div class="text-center my-8">
    <h2 class="text-2xl font-bold text-white mb-4">Choose Your Avatar</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="(avatar, index) in avatars"
        :key="index"
        @click="selectAvatar(avatar)"
        class="group relative cursor-pointer"
        >
        <!-- Inside the v-for card -->
            <div
            :class="[
                'w-24 h-24 rounded-full border-4 transition-all flex items-center justify-center',
                selected === avatar ? 'border-blue-400 scale-105 ring-2 ring-blue-400 animate-pulse' : 'border-transparent hover:scale-100'
            ]"
            >
            <img :src="getAvatarPath(avatar)" alt="NFT Avatar" class="w-16 h-16 object-contain rounded-full" />
            </div>

        </div>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'NFTSelector',
  data() {
    return {
      avatars: [
        'nft1.jpeg',
        'nft2.jpeg',
        'nft3.jpeg',
        'nft4.jpeg',
        'nft5.jpeg',
        'nft7.jpeg',
        'nft8.jpeg',
        'nft9.jpeg',
        'nft10.jpeg',
        'nft11.jpeg'
      ],
    };
  },
  computed: {
    ...mapState(['selectedAvatar']),
    selected() {
      return this.selectedAvatar;
    }
  },
  methods: {
    ...mapMutations(['setAvatar']),
    selectAvatar(avatar) {
      this.setAvatar(avatar);
    },
    getAvatarPath(filename) {
      return require(`@/assets/avatars/${filename}`);
    }
  }
};
</script>

<style scoped>
/* Optional: Add hover effect or glow animation here */
</style>
