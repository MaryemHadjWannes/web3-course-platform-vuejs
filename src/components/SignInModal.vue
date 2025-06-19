<template>
  <div v-if="show" class="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
    <div class="bg-[#12123C] p-6 rounded-xl w-full max-w-md text-white relative shadow-lg">
      <button @click="$emit('close')" class="absolute top-2 right-3 text-gray-400 hover:text-red-400 text-xl">&times;</button>
      <h2 class="text-2xl font-bold mb-4">Sign In</h2>
      <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 rounded bg-[#1E1E4A] focus:outline-none" />
      <input type="password" placeholder="Password" class="w-full mb-4 px-4 py-2 rounded bg-[#1E1E4A] focus:outline-none" />
      <button class="w-full bg-blue-500 py-2 rounded-md font-semibold hover:scale-105 transition">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInModal',
  props: ['show']
};
</script>
