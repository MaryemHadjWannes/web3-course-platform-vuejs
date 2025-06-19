<template>
  <section class="text-white bg-[#0D0D2B] min-h-screen pt-20 px-6">
    <div v-if="course" class="max-w-6xl mx-auto">
      <!-- Back Arrow + Title -->
      <div class="flex items-start justify-between mb-10">
        <div>
          <router-link to="/" class="text-cyan-400 text-xl mb-4 block hover:underline">
            ← Back
          </router-link>
          <h1 class="text-3xl md:text-4xl font-bold leading-snug mb-2">{{ course.title }}</h1>
          <p class="text-cyan-300 text-sm mb-4">{{ course.tags.join(' • ') }}</p>
          <p class="text-gray-400 text-base">{{ course.description }}</p>
        </div>
        <img :src="getAvatar(course.avatar)" alt="Course Avatar" class="w-40 h-40 object-contain" />
      </div>

      <!-- Highlights -->
      <div class="bg-[#181846] rounded-xl p-6 mb-12 shadow-lg">
        <h3 class="text-lg font-bold text-white mb-4 italic">What you’ll learn:</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div v-for="(item, index) in course.highlights" :key="index" class="flex items-start gap-2">
            <span class="text-cyan-400">✔</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Lessons -->
      <h2 class="text-2xl font-bold mb-6">Course Content</h2>
      <div class="space-y-4">
        <div
          v-for="(lesson, index) in course.lessons"
          :key="index"
          class="bg-[#1a1a3d] p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div>
            <p class="font-semibold text-white">{{ lesson }}</p>
          </div>
          <span class="text-sm text-gray-400">0% completed</span>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20 text-gray-400 text-lg">Loading course...</div>
  </section>
</template>

<script>
import courses from '@/assets/courses.json';

export default {
  name: 'CourseDetail',
  data() {
    return {
      course: null
    };
  },
  mounted() {
    const id = this.$route.params.slug;
    this.course = courses.find(c => c.id === id);
  },
  methods: {
    getAvatar(filename) {
      return require(`@/assets/avatars/${filename}`);
    }
  }
};
</script>
