<template>
  <div>
    <UserHeader />
    <MyProjectComponent />
    <UserFooter />
  </div>
</template>

<script>
import UserFooter from "@/components/UserFooter.vue";
import MyProjectComponent from "@/components/MyProjectComponent.vue";
import UserHeader from "@/components/UserHeader.vue";
export default {
  name: "MyProject",
  components: {
    UserFooter,
    UserHeader,
    MyProjectComponent
  }
};
</script>

<style></style>
