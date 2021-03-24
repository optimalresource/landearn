<template>
  <div class="home">
    <!-- <PreLoader /> -->
    <HeaderComponent />
    <MainSlider />
    <ProjectComponent />
    <!-- <ExperienceComponent /> -->
    <!-- <FeaturedComponent /> -->
    <GreenComponent />
    <!-- <SponsorComponent /> -->
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
// import PreLoader from "@/components/PreLoader.vue";
import MainSlider from "@/components/MainSlider.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
// import ExperienceComponent from "@/components/ExperienceComponent.vue";
// import SponsorComponent from "@/components/SponsorComponent.vue";
import GreenComponent from "@/components/GreenComponent.vue";
// import FeaturedComponent from "@/components/FeaturedComponent.vue";
export default {
  name: "Home",
  components: {
    FooterComponent,
    HeaderComponent,
    // PreLoader,
    MainSlider,
    ProjectComponent,
    // ExperienceComponent,
    // SponsorComponent,
    GreenComponent,
    // FeaturedComponent,
  },
};
</script>
