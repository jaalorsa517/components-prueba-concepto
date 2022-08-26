<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const { textSelf } = defineProps({
  textSelf: String,
  "*": "",
});
const emit = defineEmits(["click", "demo"]);

onMounted(() => {
  console.log("PROP", textSelf);
});

function onclick(e) {
  console.log("click child", e.value);
  emit("click", 5);
  emit("demo", "hello");
}
</script>

<template>
  <div>
    <h1>App 2</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" @click="onclick" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
