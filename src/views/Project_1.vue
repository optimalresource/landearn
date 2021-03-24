<template>
  <div class="count">
    <h1 class="count_1">Projects will be coming up shortly...</h1>
    <flip-countdown deadline="2021-12-25 00:00:00"></flip-countdown>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  components: { FlipCountdown },
};
</script>

<style scoped>
.count {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
.count_1 {
  color: #48a8fc;
}
</style>
