<template>
  <nav class="bg-[#0D0D2B] text-white py-4 px-6 flex items-center justify-between shadow-sm">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <img :src="logo" alt="Logo" class="h-10" />
      <span class="text-lg font-bold">ICEZONERS</span>
    </div>

    <!-- Links -->
    <ul class="flex items-center gap-6 text-sm font-semibold">
        <li><a href="#" class="hover:text-blue-400">Courses</a></li>

        <li>
            <button @click="showRegister = true"
            class="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1.5 rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-200">
            Register
            </button>
        </li>

        <li>
            <button @click="showSignIn = true"
            class="border border-blue-400 px-4 py-1.5 rounded-md text-blue-300 hover:bg-blue-400 hover:text-white transition-all duration-200">
            Sign In
            </button>
        </li>

        <li>
            <select class="bg-transparent outline-none text-white">
            <option>English</option>
            <option>Français</option>
            </select>
        </li>
    </ul>

    <!-- Modals -->
    <RegisterModal :show="showRegister" @close="showRegister = false" />
    <SignInModal :show="showSignIn" @close="showSignIn = false" />

  </nav>
</template>

<script>
import logo from '@/assets/logo.png';
import RegisterModal from './RegisterModal.vue';
import SignInModal from './SignInModal.vue';

export default {
  name: 'NavBar',
  components: {
    RegisterModal,
    SignInModal
  },
  data() {
    return {
      logo,
      showRegister: false,
      showSignIn: false
    };
  }
};
</script>


<style scoped>
select option {
  background-color: #0D0D2B;
  color: white;
}
</style>
