<template>
  <div class="model">
    <div class="model__categories">
      <div
          v-for="category in carCategories"
          :key="category.id"
          class="model__option"
          @click="selectCategory(category.name)"
      >
        <input
            :id="category.id"
            name="carCategory"
            type="radio"
            :value="category.name"
        >
        <label
            :for="category.id"
            :class="{active: selectedCategory === category.name}"
        >
          {{ category.name }}
        </label>
      </div>
    </div>

    <div class="model__cars">
      <div
          v-for="(page, index) in pages"
          :key="index"
          class="model__page"
          :class="{disabled: selectedPage !== index}"
      >
        <div
            v-for="car in page.cars"
            :key="car.name"
            class="model__car"
            :class="{disabled: carMatchesCategory(car.categoryId.name)}"
        >
          <span class="model__name">
            {{ car.name }}
          </span>
          <span class="model__price">
            {{ car.priceMin }} - {{ car.priceMax }} ₽
          </span>
          <img
              class="model__image"
              src="#"
          >
        </div>
      </div>
    </div>

    <div class="model__pagination">
      <div @click="selectPreviousPage">
        назад
      </div>
      <div>{{ selectedPage + 1 }}</div>
      <div @click="selectNextPage">
        вперед
      </div>
    </div>
  </div>
</template>

<script>
import {API} from "@/API";

export default {
  name: "OrderModel",
  data() {
    return {
      carCount: NaN,
      carsPerPage: 12,
      pagesCount: NaN,
      pages: [],
      selectedPage: 0,
      carCategories: [],
      selectedCategory: 'Все модели'
    }
  },
  methods: {
    async getData() {
        await this.getCategories();
        await this.getPageCount();
        await this.getCars();
    },
    async getCategories() {
      this.carCategories = await API.getCarCategories();
      this.carCategories.unshift({name: "Все модели", id: "all"});
    },
    async getPageCount() {
      this.carCount = await API.getCarCount();
      this.pagesCount = Math.ceil(this.carCount / this.carsPerPage);
      for (let i = 0; i < this.pagesCount; i++) this.pages.push({empty: true, cars: []});
    },
    async getCars() {
      if (this.pages[this.selectedPage].empty) {
        this.pages[this.selectedPage].cars = await API.getCars(this.carsPerPage, this.selectedPage);
        this.pages[this.selectedPage].empty = false;
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    getCarThumbnail(path) {
      return API.getCarThumbnail(path);
    },
    selectPreviousPage() {
      if (this.selectedPage > 0) this.selectedPage--;
    },
    selectNextPage() {
      if (this.selectedPage < this.pages.length - 1) this.selectedPage++;
      this.getCars();
    },
    carMatchesCategory(carCategory) {
      if (this.selectedCategory === 'Все модели') return true;
      return carCategory === this.selectedCategory;
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style scoped lang="scss">
.model {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 64px;

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__option {
    display: flex;
    position: relative;
    overflow: hidden;

    input {
      display: none;

      &:checked + label {
        &:before {
          box-shadow: inset 0 0 0 3px $main-accent;
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      @include roboto-text(300, 14px, $gray);
      cursor: pointer;

      &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 1px $gray;
        margin-right: 8px;
      }

      &.active {
        @include roboto-text(300, 14px, $black);
      }
    }
  }

  &__cars {
    overflow: auto;
    margin-top: 48px;
    padding: 5px;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  &__page {
    display: flex;
    flex-wrap: wrap;
  }

  &__car {
    border: 1px solid $gray-light;
    display: flex;
    flex-direction: column;
    padding: 16px;

    &:hover {
      border-color: $gray;
    }

    &:active {
      border-color: $main-accent;
      box-shadow: 0 0 5px $main-accent;
    }
  }

  &__name {
    @include roboto-text(400, 18px, $black);
  }

  &__price {
    @include roboto-text(400, 14px, $gray);
    margin-top: 5px;
  }

  &__image {
    margin: 36px 0 0 80px;
    width: 256px;
    height: 116px;
  }
}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .model {
    &__image {
      margin: 0;
    }
  }
}

@media screen and (min-width: 0) and (max-width: 768px) {
  .model {
    &__image {
      margin: 0;
    }
  }
}
</style>