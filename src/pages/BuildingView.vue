<template>
  <div class="building-container">
    <div v-if="buildings.length === 0">Aucun bâtiment disponible</div>
    <div v-for="building in buildings" :key="building.dynamicId">
      <h1 class="building-title">Bâtiment : {{ building.name }}</h1>
      <FloorView :floors="building.children || []" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FloorView from './FloorView.vue';

export default {
  name: 'BuildingView',
  components: {
    FloorView
  },
  computed: {
    ...mapState({
      buildings: state => state.buildings.children || []
    })
  },
  created() {
    this.fetchBuildings();
  },
  methods: {
    ...mapActions(['fetchBuildings'])
  }
};
</script>
<style>
.building-container {
  text-align: center;
}

.building-title {
  margin-bottom: 20px;
}
</style>