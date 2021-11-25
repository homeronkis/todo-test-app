<template>
  <div class="tasks">
    <div class="add-button" @click="openModal">
      <span class="circle">
        +
      </span>
      <span class="txt">
        Add a new task
      </span>
    </div>
    <div class="tasks-list">
      <TasksItem v-for="(task, index) in taskList" :key="task.name"  :info="task" :index="index" @openAccordion="accordionAction" @removeTask="remove"/>
    </div>
    <ChunksModal v-if="showModal" @newTask='setNewData'/>
  </div>
</template>
<script>
import { tasks } from "static/staticApi"

export default {
  data: function () {
    return {
      taskList: tasks,
      showModal: false
    }
  },
  methods: {
    accordionAction: function (index){
      this.taskList[index].active = !this.taskList[index].active;

    },
    openModal: function(){
      this.showModal = true
    },
    setNewData: function (data){
      this.showModal = false
      this.taskList.push(data)
      console.log("set data", data)
    },
    remove: function(index){
      this.taskList.splice(index, 1)
    }
  }
}
</script>
<style lang="sass">

.add-button
  display: flex
  align-items: center
  justify-content: flex-start
  margin: 15px 0
  cursor: pointer
  &:hover
    span
      color: $lightGreyTxt
    .circle
      color: #ffff
  span
    display: block
  .circle
    display: flex
    justify-content: center
    align-items: center
    flex-shrink: 0
    color: #ffffff
    font-size: 1.2em
    background-color: $darkBlue
  .txt
    font-size: 1.2em
    color: $darkBlue
    margin-left: 10px
.tasks-list
  margin-left: 10px
</style>
