<template>
  <div class="pill" :style="{backgroundColor: `hsl(${parseInt((index+1/length)*359)}, 80%, 40%)`}">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount", "length", "index"],
};
</script>

<style scoped>
.pill {
  color: #fff;
  margin: 10px;
  height: 55px;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.pill .name {
  margin-left: 15px;
}
.pill .amount {
  margin: 10px;
  padding: 5px;
  height: 35px;
  border-radius: 18px;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>