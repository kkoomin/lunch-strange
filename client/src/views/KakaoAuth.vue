<template>
  <div class="kakao-auth">Logging In...</div>
</template>

<script>
import qs from "qs";
import axios from "axios";

export default {
  name: "KakaoAuth",
  methods: {
    getToken() {
      const code = qs.parse(location.search.replace("?", "")).code;
      //   console.log(code);
      axios
        .post("http://70.12.224.218:8000/auth", { code })
        .then((res) => console.log(res));
    },
  },
  created() {
    this.getToken();
  },
};
</script>

<style></style>
