<template>
  <div>
    <UserHeader />
    <BookInspectionComponent />
    <UserFooter />
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
  }
};
</script>

<style></style>
