// File: src/components/CourseGallery.vue
<template>
  <section class="py-12 px-4 bg-[#0D0D2B] text-white">
    <h2 class="text-3xl font-bold mb-8 text-center">Courses</h2>

    <!-- Filter Tags -->
    <div class="flex flex-wrap gap-3 justify-center mb-10">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="toggleTag(tag)"
        :class="[
          'px-5 py-2 rounded border border-cyan-400 font-semibold transition-all duration-200',
          selectedTags.includes(tag) ? 'bg-cyan-500 text-white' : 'bg-[#1a1a3d] text-white hover:bg-cyan-600'
        ]"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Courses Display -->
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div
        v-for="course in filteredCourses"
        :key="course.title"
        class="bg-[#181846] rounded-xl p-6 flex items-center gap-6 shadow-lg hover:scale-[1.02] transition-transform"
      >
        <img
          :src="getAvatar(course.avatarFilename)"
          alt="Course Image"
          class="w-28 h-28 rounded-xl object-contain border-2 border-blue-400"
        />
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
          <p class="text-cyan-300 text-sm mb-2">{{ course.tags.join(' • ') }}</p>
          <p class="text-sm text-gray-300 mb-3">{{ course.description }}</p>
          <button class="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1.5 rounded-md shadow hover:scale-105 transition" @click="$router.push(`/course/${course.id}`)">
            Start Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseGallery',
  data() {
    return {
      selectedTags: [],
      courses: [
        {
            id: 'solidity-beginner',
            title: 'Solidity: Beginner to Intermediate Smart Contracts',
            tags: ['Solidity', 'Beginner', 'Intermediate'],
            description: 'Get up to speed with the basics of Solidity.',
            avatarFilename: 'nft1.jpeg'
        },
        {
            id: 'solidity-advanced',
            title: 'Advanced Solidity: Get In-depth Knowledge',
            tags: ['Solidity', 'Advanced'],
            description: 'Deploying Ethereum DApps with Truffle for advanced smart contracts.',
            avatarFilename: 'nft2.jpeg'
        },
        {
            id: 'zk-beginner',
            title: 'Beyond Ethereum: Explore the Blockchain Ecosystem',
            tags: ['zkSync', 'Beginner'],
            description: 'Explore the blockchain ecosystem.',
            avatarFilename: 'nft3.jpeg'
        },
        {
            id: 'optimism-intermediate',
            title: 'Optimism Unleashed',
            tags: ['Optimism', 'Intermediate'],
            description: 'Smart contract deployment using Optimism rollups.',
            avatarFilename: 'nft4.jpeg'
        },
        {
            id: 'tron',
            title: 'Tron: Decentralize the Web',
            tags: ['Tron'],
            description: 'Start working with TRON public blockchain.',
            avatarFilename: 'nft5.jpeg'
        },
        {
            id: 'neo-intermediate',
            title: 'Mastering the NEO Blockchain',
            tags: ['Neo', 'Intermediate'],
            description: 'Build decentralized applications on Neo.',
            avatarFilename: 'nft7.jpeg'
        }
        ]

    };
  },
  computed: {
    allTags() {
      return [...new Set(this.courses.flatMap(c => c.tags))];
    },
    filteredCourses() {
      if (this.selectedTags.length === 0) return this.courses;
      return this.courses.filter(course =>
        this.selectedTags.every(tag => course.tags.includes(tag))
      );
    }
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    getAvatar(filename) {
      return require(`@/assets/avatars/${filename}`);
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
