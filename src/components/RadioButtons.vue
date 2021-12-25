<template>
  <div class="radio-btns">
    <label v-for="option in options" :key="option.val" class="radio">
          <span class="radio__label">{{option.label}}</span>
          <span :ref="option.val" class="radio__input" >
          <input :id="option.val" class="radio__btn" type="radio" name="radio" @click="selectOption(option.val)"/>
          <span class="radio__control"></span>
          </span>
    </label>
  </div>
</template>

<script>

export default {
  props: {
    defaultOption: String ,
    options: {
      required: true,
      type: Array
    }
  },
  methods: {
    selectOption(val) {
      Array.from(document.querySelectorAll('.radio__btn')).forEach((el) => el.classList.remove('selected')) //remove previously selected
      document.getElementById(val).classList.add('selected') //set new selected option
      this.$emit('option-selected', val)
    }
  },
  mounted() {
    document.getElementById(this.defaultOption).classList.add('selected')
  }
}
</script>

<style scoped>
.radio-btns { 
    display: flex;
    flex-direction: column;
}
.radio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0;
  font-size: 14px;
}
.radio__label {
    color: var(--color-black-secondary);   
    font-size: 14px;
}
.radio__input input {
    opacity: 0;
    width: 0;
    height: 0;
}
.radio__input {
  display: flex;
}
.radio__control {
  display: grid;
  place-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1.5px solid var(--color-purple);
  cursor: pointer;
}
input.selected + .radio__control {
  background-color: var(--color-purple);
  border-color: transparent;
}
input.selected + .radio__control::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #FFFFFF;
    transition: all 0.4s ease;
    transform: scale(0);
}
input.selected + .radio__control::before {
  transform: scale(1);
}
@media (max-width: 1024px) {
  
}
</style>
