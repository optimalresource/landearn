<template>
  <div>
    <UserHeader v-show="yes"  />
    <BookInspectionComponent />
    <UserFooter v-show="yes" />
  </div>
</template>

<script>
import UserFooter from "@/components/UserFooter.vue";
import BookInspectionComponent from "@/components/BookInspectionComponent.vue";
import UserHeader from "@/components/UserHeader.vue";
export default {
  name: "BookInspection",
  components: {
    UserFooter,
    UserHeader,
    BookInspectionComponent
  },
  data(){
    return {
      yes:false
    }
  }
};
</script>

<style></style>
