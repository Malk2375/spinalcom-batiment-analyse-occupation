<template>
  <div class="room-card">
    <h4>Pièce n° {{ roomIndex + 1 }} : {{ room.name }}</h4>
    <p class="occupation">
      Occupation : <span :class="getOccupationClass">{{ getRoomOccupation }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: {
    room: {
      type: Object,
      required: true
    },
    roomDetails: {
      type: Object,
      required: true
    },
    roomIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    getRoomOccupation() {
      if (!this.roomDetails || this.roomDetails.occupation === undefined) {
        return 'INDÉFINIE';
      } else {
        return this.roomDetails.occupation ? 'Occupée' : 'Non Occupée';
      }
    },
    getOccupationClass() {
      if (!this.roomDetails || this.roomDetails.occupation === undefined) {
        return 'undefined-occupation';
      } else {
        return this.roomDetails.occupation ? 'true-occupation' : 'false-occupation';
      }
    }
  }
};
</script>

<style>
.room-card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;
}

.occupation {
  font-weight: bold;
}

.occupation .true-occupation {
  color: green;
}

.occupation .false-occupation {
  color: red;
}

.occupation .undefined-occupation {
  color: grey;
}
</style>
