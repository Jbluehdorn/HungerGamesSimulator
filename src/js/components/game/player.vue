<template>
  <div>
    <h1>I'm {{player.name}}!</h1>
    <h3 v-if="player.weapon != 'None'">My weapon is a {{player.weapon}}</h3>
    <h3 v-if="player.action != 'None'">My action is {{player.action}}</h3>
    <h3 v-if="player.target != 'None'">My target us {{player.target}}</h3>
    <h3 v-if="player.damage > 0">My damage calculation is {{player.damage}}</h3>
    <!--  Test Buttons
    <button @click="getAction">Get Action</button>
    <button @click="getTarget">Get Target</button>
    <button @click="getDamage">Get Damage</button>
    /Test Buttons -->
    <button class="btn btn-primary" @click="generateOutput">Generate Output</button>
  </div>
</template>

<script>
export default{
  props: ['player'],
  data() {
    return {
      name: "None",
      health: 10,
      attackPower: 5,
      agility: 5,
      state: "None",
      weapon: "None",
      action: "None",
      target: "None",
      damage: 0,
      output: ""
    }
  },
  methods:{
    getAction(){
      var AVAILABLE_WEAPONS = ["Sword", "Battleaxe", "Bow"];
      //import AVAILABLE_WEAPONS from game state in above line
      if (this.player.weapon == "None" && AVAILABLE_WEAPONS.length > 0){
        console.log("not this one");
        this.player.weapon = AVAILABLE_WEAPONS.pop();
      }
      var ACTIONS = ["Attacked", "Ran", "Hid"];
      this.player.action = ACTIONS[Math.floor(Math.random()*ACTIONS.length)];
    },
    getTarget(){
      if (this.player.action == "Attacked"){
        var AVAILABLE_TARGETS = ["Lane Kiffin", "Kirby Smart"];
        //import AVAILABLE_TARGETS from game state in above line
      }
      else if (this.player.action == "Hid"){
        var AVAILABLE_TARGETS = ["Bush", "Tree"];
      }
      else {
        var AVAILABLE_TARGETS = ["None"];
      }
      this.player.target = AVAILABLE_TARGETS[Math.floor(Math.random()*AVAILABLE_TARGETS.length)];
    },
    getDamage(){
      //Adjust to account for weapon boost, need to make weapon an obj
      this.player.damage = Math.floor(Math.random()*this.player.attackPower)+1;
    },
    generateOutput(){
      this.getAction();
      this.getTarget();
      if (this.player.action == "Attacked"){
        this.getDamage();
      }
      else{
        this.player.damage = 0;
      }
    }
  }
}

</script>
