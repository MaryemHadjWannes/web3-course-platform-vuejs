<template>
  <div class="min-h-screen bg-[#0D0D2B] text-white">
    <NavBar />
    <NFTSelector />
    <HeroSection />
    <CourseGallery />
    <FooterSection />
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NFTSelector from '@/components/NFTSelector.vue';
import HeroSection from '@/components/HeroSection.vue';
import CourseGallery from '@/components/CourseGallery.vue';
import FooterSection from '@/components/FooterSection.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    NFTSelector,
    HeroSection,
    CourseGallery,
    FooterSection
  }
};
</script>
