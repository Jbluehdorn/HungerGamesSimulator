<template>
  <div>
      <player v-for="player in players" :key="player.name" :player="player"></player>
  </div>
</template>

<script>
  import player from './game/player'

  export default {
    components: {player},
    data(){
      return{
        players: [
          {     name: "Mike Leach",
                health: 10,
                attackPower: 5,
                agility: 5,
                state: "None",
                primaryWeapon: "Sword",
                weapon: "None",
                action: "None",
                target: "None"}
        ]
      }
    }
  }
</script>
