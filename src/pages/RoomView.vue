<template>
  <div class="room-container">
    <div v-if="rooms.length === 0">Aucune pièce disponible</div>
    <div v-for="(room, index) in rooms" :key="room.dynamicId" class="room-card">
      <div class="PieceHeader">
        <h4>Pièce n° {{ index + 1 }} : {{ room.name }}</h4>
        <h4>{{room.dynamicId}}</h4>
      </div>
      <p class="occupation">
        Occupation : <span :class="getOccupationClass(room.dynamicId)">{{ getRoomOccupation(room.dynamicId) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RoomView',
  props: {
    rooms: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(['getRoomDetails']),
  },
  methods: {
    ...mapActions(['fetchRoomDetails']),
    getRoomOccupation(roomId) {
      const details = this.getRoomDetails(roomId);
      if (!details || details.occupation === undefined) {
        return 'INDÉFINIE';
      } else {
        return details.occupation ? 'Occupée' : 'Non Occupée';
      }
    },
    getOccupationClass(roomId) {
      const details = this.getRoomDetails(roomId);
      if (!details || details.occupation === undefined) {
        return 'undefined-occupation';
      } else {
        return details.occupation ? 'true-occupation' : 'false-occupation';
      }
    }
  },
  watch: {
    rooms: {
      immediate: true,
      handler(newRooms) {
        newRooms.forEach(room => this.fetchRoomDetails(room.dynamicId));
      }
    }
  }
};
</script>

<style>
.room-container {
  height: 85%;
  overflow-y: auto;
  padding: 10px;
}

.room-card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;
}

.room-container::-webkit-scrollbar {
  width: 10px;
}

.room-container::-webkit-scrollbar-thumb {
  background-color: #01521d;
  border-radius: 10px;
}

.room-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.occupation {
  font-weight: bold;
}

.true-occupation {
  color: green;
}

.false-occupation {
  color: red;
}

.undefined-occupation {
  color: grey;
}
.PieceHeader{
  display: flex;
  justify-content: space-around;
}
</style>
