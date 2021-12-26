<template>
  <label class="checkbox">
    <span class="checkbox__input">
      <input
        :id="id"
        class="checkbox__btn"
        type="checkbox"
        name="checkbox"
        @click="$emit('option-checked')"
      />
      <span class="checkbox__control"></span>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    id: String,
  },
};
</script>

<style scoped>
.checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px 0;
  font-size: 14px;
}
.checkbox__input input {
  opacity: 0;
  width: 0;
  height: 0;
}
.checkbox__input {
  display: flex;
}
.checkbox__control {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1.5px solid var(--color-purple);
  cursor: pointer;
}
input.checked + .checkbox__control {
  background-color: var(--color-purple);
  border-color: transparent;
}
input.checked + .checkbox__control::before {
  content: "\2713";
  color: #ffffff;
  transition: all 0.4s ease;
  transform: scale(0);
}
input.checked + .checkbox__control::before {
  transform: scale(1);
}
</style>
