<template>
  <div :class="['stats-card', dataBackgroundColor]" @click="handleClick">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsCard",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.stats-card {
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
}

.stats-card.green {
  background-color: #4caf50;
  color: white;
}

.header {
  font-size: 1.5em;
  font-weight: bold;
}

.content {
  font-size: 1.2em;
}
</style>
