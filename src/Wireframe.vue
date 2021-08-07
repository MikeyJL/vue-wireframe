<template>
  <div class="wireframe" :style="styling">
    <form
      v-if="editing"
      @submit.prevent="editing = false"
      class="fadeIn"
    >
      <textarea
        v-model="styling"
        placeholder="CSS"
        aria-label="CSS"
      />
      <button class="fadeIn">
        Close
      </button>
    </form>
    <button
      v-else
      @click="editing = true"
    >
      Edit
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editing: false,
      styling: 'min-height: 100px'
    }
  }
}
</script>

<style scoped>
.fadeIn {
  animation: .6s fade cubic-bezier(0.165, 0.84, 0.44, 1);
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.wireframe {
  padding: 1rem;
  background-color: rgb(165, 165, 165);
  border-radius: 10px;
}
.wireframe form {
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 30%;
  min-width: 300px;
  max-width: 600px;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 20px 10px #05050510;
  border-radius: 10px;
}
.wireframe form textarea {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #050505;
  outline: none;
  border: 2px solid #050505;
  border-radius: 5px;
  resize: vertical;
}
button {
  cursor: pointer;
  padding: .4rem 1rem;
  font-size: .8rem;
  font-weight: bold;
  font-size: 16px;
  color: #050505;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #050505;
  color: white;
  transition: .6s all cubic-bezier(0.165, 0.84, 0.44, 1);
}
button:hover {
  opacity: .6;
}
</style>
