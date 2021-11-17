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

    <div
        id="pages"
        class="model__cars"
    >
      <div
          v-for="(page, index) in pages"
          :key="index"
          class="model__page"
          :class="{disabled: selectedPageIndex !== index}"
      >
        <div
            v-for="(car, index) in page.cars"
            :key="index"
            class="model__car"
            :class="{disabled: !carMatchesCategory(car), active: car.id === selectedCarId}"
            @click="selectCar(car)"
        >
          <span class="model__name">
            {{ car.name }}
          </span>
          <span class="model__price">
            {{ car.priceMin }} - {{ car.priceMax }} ₽
          </span>
          <div class="model__image">
            <img
                :src="getCarThumbnail(car.thumbnail.path)"
                :alt="car.name"
                @error="handleImageError"
            >
          </div>

        </div>
      </div>
    </div>

    <div
        class="loading-message"
        :class="{disabled: !loading}"
    >
      Идёт загрузка данных...
    </div>
    <div
        class="error-message"
        :class="{disabled: !error}"
    >
      Что-то пошло не так...
    </div>

    <ul
        class="model__pagination"
        :class="{disabled: loading}"
    >
      <li
          :class="{disabled: selectedPageNumber === 1}"
          class="model__page-change"
          @click="selectPreviousPage"
      >
        «
      </li>
      <li class="model__selected">
        {{ selectedPageNumber }}
      </li>
      <li
          :class="{disabled: selectedPageNumber === pagesCount}"
          class="model__page-change"
          @click="selectNextPage"
      >
        »
      </li>
    </ul>
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
      selectedPageIndex: 0,
      carCategories: [],
      selectedCategory: 'Все модели',
      selectedCarId: '',
      loading: false,
      error: false
    }
  },
  emits: ['infoUpdated'],
  computed: {
    selectedPageNumber() {
      return this.selectedPageIndex + 1;
    }
  },
  methods: {
    selectCar(car) {
      this.selectedCarId = car.id;
      this.updateInfo(car);
    },
    async getData() {
      try {
        this.loading = true;
        await this.getCategories();
        await this.getPageCount();
        await this.getCars();
      } catch (e) {
        this.error = true;
        console.log('aaa', e)
      } finally {
        this.loading = false;
      }
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
      if (this.pages[this.selectedPageIndex].empty) {
        this.pages[this.selectedPageIndex].cars = await API.getCars(this.carsPerPage, this.selectedPageIndex);
        this.pages[this.selectedPageIndex].empty = false;
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    getCarThumbnail(path) {
      return API.getCarThumbnail(path);
    },
    selectPreviousPage() {
      if (this.selectedPageIndex > 0) this.selectedPageIndex--;
    },
    async selectNextPage() {
      if (this.selectedPageIndex < this.pages.length - 1) this.selectedPageIndex++;
      try {
        this.loading = true;
        await this.getCars();
      } catch (e) {
        this.error = true;
        console.log('bbb', e);
      } finally {
        this.loading = false;
      }
    },
    carMatchesCategory(car) {
      if (this.selectedCategory === 'Все модели' || !car.categoryId) return true;
      return car.categoryId.name === this.selectedCategory;
    },
    handleImageError(e) {
      e.target.src = require('@/assets/images/car_no_image.png');
    },
    updateInfo(car) {
      this.$emit('infoUpdated', {name: 'model', value: car});
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
  padding-right: 16px;

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

    &.disabled {
      height: 0;
      overflow: hidden;
    }
  }

  &__car {
    border: 1px solid $gray-light;
    display: flex;
    flex-direction: column;
    padding: 16px;

    &.disabled {
      display: none;
    }

    &:hover {
      border-color: $gray;
    }

    &.active, &:active {
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
    display: flex;
    justify-content: flex-end;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  &__pagination {
    display: flex;
    @include roboto-text(400, 20px, $black);
    width: 100%;
    justify-content: center;
    gap: 16px;
    align-items: center;
    margin: 5px 0 5px 0;

    &.disabled {
      display: none;
    }
  }

  &__selected {
    cursor: default;
  }

  &__page-change {
    @include roboto-text(400, 30px, $black);
    cursor: pointer;

    &.disabled {
      visibility: hidden;
    }
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