<template>
  <footer class="bg-[#0D0D2B] text-white py-12 px-6 relative z-10">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
      
      <!-- Logo & Description -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <img :src="logo" alt="ICE Logo" class="h-10" />
          <span class="text-xl font-bold">ICEZONERS</span>
        </div>
        <p class="text-sm text-gray-300">Learn to Code Blockchain DApps by Building Simple Games</p>
      </div>

      <!-- Get Started -->
      <div>
        <h3 class="text-sm font-bold mb-3">GET STARTED</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-blue-400">Blog</a></li>
          <li><a href="#" class="hover:text-blue-400">Course</a></li>
          <li><a href="#" class="hover:text-blue-400">What is Blockchain?</a></li>
        </ul>
      </div>

      <!-- Get in Touch -->
      <div>
        <h3 class="text-sm font-bold mb-3">GET IN TOUCH</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-blue-400">Github</a></li>
          <li><a href="#" class="hover:text-blue-400">Twitter</a></li>
          <li><a href="#" class="hover:text-blue-400">Newsletter</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="mt-12 text-xs text-center text-gray-500 border-t border-gray-700 pt-4">
      © Copyright 2025 ICEzoners. All Rights Reserved
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/logo.png';

export default {
  name: 'FooterSection',
  data() {
    return {
      logo
    };
  }
};
</script>
