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
          <div
              v-if="!validCitySelected"
              class="location__select"
          >
            <div
                v-for="city in filteredCities"
                :key="city"
                class="location__option"
                @click="selectedCity=city"
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
              v-model="selectedPoint"
              placeholder="Начните вводить пункт..."
              :disabled="!validCitySelected"
          >
          <div
              v-if="!validPointSelected"
              class="location__select"
          >
            <div
                v-for="point in filteredPoints"
                :key="point"
                class="location__option"
                @click="selectedPoint=point"
            >
              {{ point }}
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
      points: [],
      selectedCity: '',
      selectedPoint: ''
    }
  },
  methods: {
    async getData() {
      let cities = await API.getCities();
      let points = await API.getPoints();
      cities = cities.data;
      points = points.data;
      this.cities = cities;
      this.points = points;
      console.log(points);
    }
  },
  computed: {
    filteredCities() {
      return this.cities
          .filter(city =>
              this.selectedCity &&
              city.name.toLowerCase().startsWith(this.selectedCity.toLowerCase())
          )
          .map(city => city.name);
    },
    filteredPoints() {
      return this.points
          .filter(point => point?.cityId && point.cityId.name === this.selectedCity)
          .filter(point =>
              this.selectedPoint &&
              (point.address.toLowerCase().startsWith(this.selectedPoint.toLowerCase()) ||
                  point.name.toLowerCase().startsWith(this.selectedPoint.toLowerCase()))
          )
          .map(point => point.address + ' ( ' + point.name + ' )');
    },
    validCitySelected() {
      return this.filteredCities.length === 1 && this.filteredCities.includes(this.selectedCity)
    },
    validPointSelected() {
      return this.filteredPoints.length === 1 && this.filteredPoints.includes(this.selectedPoint)
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

    &:disabled {
      opacity: 0.5;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__select {
    position: absolute;
    left: 0;
    background: white;
    width: auto;
    z-index: 2;
  }

  &__option {
    @include roboto-text(300, 14px, $black);
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: $gray-light;
    }
  }

  img {
    margin-top: 16px;
    width: 400px;
    height: auto;
  }
}
</style>
