<template>
  <div class="location">
    <ul>
      <li>
        <label for="city">Город:</label>
        <div class="location__input">
          <input
              id="city"
              v-model="selectedCity"
              placeholder="Начните вводить город..."
          >
          <div class="location__select">
            <div
                v-for="city in filteredCities"
                :key="city"
                class="location__option"
            >
              {{ city }}
            </div>
          </div>
        </div>
      </li>
      <li>
        <label for="place">Пункт выдачи:</label>
        <div class="location__input">
          <input
              id="place"
              placeholder="Начните вводить пункт..."
          >
          <div class="location__select">
            <div
                v-for="place in filteredPlaces"
                :key="place"
                class="location__option"
            >
              {{ place }}
            </div>
          </div>
        </div>
      </li>
    </ul>

    <label class="location__map-caption">Выбрать на карте:</label>
    <img src="../assets/images/map.png">
  </div>
</template>

<script>
import {API} from "../API";

export default {
  name: "OrderLocation",
  data() {
    return {
      cities: [],
      selectedCity: ''
    }
  },
  methods: {
    async getData() {
      let cities = await API.getCities();
      cities = cities.data;
      this.cities = cities;
    }
  },
  computed: {
    filteredCities() {
      return this.cities.map(city => city.name)
          .filter(city => this.selectedCity && city.toLowerCase().startsWith(this.selectedCity.toLowerCase())  );
    },
    filteredPlaces() {
      return [];
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style scoped lang="scss">

@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";

.location {
  display: inline-flex;
  flex-direction: column;
  padding: 16px 192px 0 64px;

  ul {
    li {
      display: flex;
      align-items: center;
    }
  }

  label {
    @include roboto-text(300, 14px, $black);
    margin-top: 16px;
    margin-right: 16px;
  }

  &__input {
    position: relative;
  }

  input {
    display: inline;
    margin-top: 16px;
    @include roboto-text(300, 14px, $black);
    padding: 0;
    border: 1px none $gray;
    border-bottom-style: solid;

    &:focus-visible {
      outline: none;
    }
  }

  &__select {
    position: absolute;
    left: 0;
    background: white;
    width: 100%;
    z-index: 2;
  }

  &__option {
    @include roboto-text(300, 14px, $black);
    padding: 5px;

    &:hover {
      background-color: $gray-light;
    }
  }

  img {
    margin-top: 16px;
    width: 400px;
    height: auto;
    transition: transform 0.5s;

    &:hover {
      transform: scale(2) translate(20%, 20%);
    }
  }
}

</style>
