<template>
  <div></div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store
      .dispatch("logout")
      .then((response) => {
        console.log(response);
        if (response.status == "200") {
          this.$toasted.success("You have logged out successful");
          this.$router.push({ name: "Login" });
        } else {
          this.$toasted.error(response.data.message);
          this.$router.push({ name: "Login" });
        }
      })
      .catch((error) => {
        if (typeof error === "object" && error !== null) {
          for (const property in error) {
            this.$toasted.error(error[property]);
          }
        } else {
          this.$toasted.error(error);
        }
        this.$router.push({ name: "Login" });
      });
  },
};
</script>
