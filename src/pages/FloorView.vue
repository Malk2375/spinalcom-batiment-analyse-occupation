<template>
  <div class="main-container">
    <div class="left-pane">
      <div v-if="floors.length === 0">Aucun étage disponible</div>
      <div v-for="(floor, index) in floors" :key="floor.dynamicId">
        <stats-card :data-background-color="selectedFloorIndex === index ? 'green' : ''" @click="selectFloor(index)">
          <template slot="header">
            <h2>Étage n° {{ index }} : <span class="floor-name">{{ floor.name }}</span></h2>
          </template>
          <template slot="content">
            <h3 class="category">Pourcentage d'occupation : {{ getFloorOccupationPercentage(floor.children).toFixed(0)
              }}%</h3>
            <p>Nombre total de pièces : {{ getTotalRooms(floor.children) }}</p>
          </template>
        </stats-card>
      </div>
    </div>
    <div class="right-pane">
      <RoomView v-if="selectedFloor" :rooms="selectedFloor.children || []" />
    </div>
  </div>
</template>

<script>
import RoomView from './RoomView.vue';
import StatsCard from './StatsCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FloorView',
  components: {
    RoomView,
    StatsCard
  },
  props: {
    floors: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      selectedFloorIndex: 0
    };
  },
  computed: {
    ...mapGetters(['getRoomDetails']),
    selectedFloor() {
      return this.floors[this.selectedFloorIndex];
    }
  },
  methods: {
    ...mapActions(['fetchRoomDetails']),
    getFloorOccupationPercentage(rooms) {
      let trueOccupations = 0;
      let totalOccupations = 0;

      rooms.forEach(room => {
        const details = this.getRoomDetails(room.dynamicId);
        if (details) {
          if (details.occupation !== undefined) {
            if (details.occupation === true) {
              trueOccupations++;
            }
            totalOccupations++;
          } else {
            totalOccupations++;
          }
        }
      });

      return totalOccupations > 0 ? (trueOccupations * 100) / totalOccupations : 0;
    },
    getTotalRooms(rooms) {
      return rooms.length;
    },
    selectFloor(index) {
      this.selectedFloorIndex = index;
    }
  },
  watch: {
    floors: {
      immediate: true,
      handler(newFloors) {
        newFloors.forEach(floor => {
          if (floor.children) {
            floor.children.forEach(room => this.fetchRoomDetails(room.dynamicId));
          }
        });
      }
    }
  }
};
</script>

<style>
.main-container {
  display: flex;
  height: 100vh;
}

.left-pane {
  width: 50%;
  padding: 10px;
}

.right-pane {
  width: 50%;
  padding: 10px;
}

.stats-card {
  cursor: pointer;
}

.floor-name {
  font-weight: bold;
}
</style>
