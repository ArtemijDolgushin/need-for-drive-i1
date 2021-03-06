<template>
  <div class="carousel">
    <div
        class="carousel__background"
        :class="[{'slider-change': sliderIsChanging}, currentSlider.class]"
    ></div>
    <div
        class="carousel__arrow carousel__arrow_left"
        @click="selectPreviousSlide"
    >
      <img
          src="../assets/images/arrow-left.svg"
          alt="arrow left"
      >
    </div>
    <main :class="{'slider-change': sliderIsChanging}">
      <div class="carousel__content">
        <span class="carousel__title">{{ currentSlider.titleText }}</span>
        <span class="carousel__caption">{{ currentSlider.captionText }}</span>
        <button
            class="carousel__button"
            :class="currentSlider.buttonClass"
        >Подробнее
        </button>
      </div>
    </main>


    <div class="carousel__dots">
      <div
          v-for="(slider, index) in slides"
          :key="index"
          :class="{active: slider.class === currentSlider.class}"
          @click="selectSlide(index)"
      >
        <img
            src="../assets/images/dot.svg"
            alt="dot"
        >
      </div>
    </div>


    <div
        class="carousel__arrow carousel__arrow_right"
        @click="selectNextSlide"
    >
      <img
          src="../assets/images/arrow-right.svg"
          alt="arrow right"
      >
    </div>

  </div>
</template>

<script>
import {slides} from "@/mock/slides.mock";

export default {
  name: "TheCarousel",
  data() {
    return {
      slides: slides,
      currentSliderIndex: 0,
      sliderIsChanging: false
    }
  },
  computed: {
    currentSlider() {
      return this.slides[this.currentSliderIndex];
    }
  },
  methods: {
    async selectPreviousSlide() {
      this.toggleSliderChangeAnimation();
      await this.waitTime();
      if (this.currentSliderIndex === 0) {
        this.currentSliderIndex = this.slides.length - 1;
      } else {
        --this.currentSliderIndex
      }
      await this.waitTime();
      this.toggleSliderChangeAnimation();
    },
    async selectNextSlide() {
      this.toggleSliderChangeAnimation();
      await this.waitTime();
      if (this.currentSliderIndex + 1 === this.slides.length) {
        this.currentSliderIndex = 0
      } else {
        ++this.currentSliderIndex
      }
      await this.waitTime();
      this.toggleSliderChangeAnimation();
    },
    async selectSlide(index) {
      this.toggleSliderChangeAnimation();
      await this.waitTime();
      this.currentSliderIndex = index;
      await this.waitTime();
      this.toggleSliderChangeAnimation();
    },
    toggleSliderChangeAnimation() {
      this.sliderIsChanging = !this.sliderIsChanging;
    },
    async waitTime() {
      return await new Promise((resolve) => {
        setTimeout(() => resolve(''), 100)
      });
    }
  }
}
</script>

<style lang="scss">
.slider-change {
  opacity: 0;
}

.slider-free-parking {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../assets/images/slider-free-parking.png);
  background-size: cover;
}

.slider-insurance {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../assets/images/slider-insurance.png);
  background-size: cover;
}

.slider-gasoline {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../assets/images/slider-gasoline.png);
  background-size: cover;
}

.slider-service {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../assets/images/slider-service.png);
  background-size: cover;
}

.carousel {
  display: inline-flex;
  justify-content: space-between;
  mix-blend-mode: normal;
  width: 100%;
  position: relative;
  background-color: black;

  &__background {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: opacity 0.2s;
  }

  &__dots {
    display: flex;
    gap: 8px;
    position: absolute;
    bottom: 32px;
    left: 50%;
    z-index: 1;

    .active {
      filter: $green-filter;
    }

    img {
      cursor: pointer;
    }
  }

  &__arrow {
    padding: 0 28px 0 28px;
    width: 8px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 2;
    transition: background 0.5s;

    &:hover {
      background: rgba(14, 194, 97, 0.2);
    }
  }

  &__arrow_left {
    position: absolute;
    left: 0;
  }

  &__arrow_right {
    position: absolute;
    right: 0;
  }


  main {
    width: 100%;
    z-index: 1;
    transition: opacity 0.2s;
  }


  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 237px 100px 0 100px;
  }

  &__title {
    @include roboto-text(500, 40px, $white);
    white-space: normal;
  }

  &__caption {
    @include roboto-text(300, 24px, $gray);
    margin-top: 8px;
    white-space: normal;
  }

  &__button {
    margin-top: 32px;
    white-space: normal;
  }

  .button_green {
    @include button($green-gradient-colors);
  }

  .button_blue {
    @include button($blue-gradient-colors);
  }

  .button_red {
    @include button($red-gradient-colors);
  }

  .button_purple {
    @include button($purple-gradient-colors);
  }

}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1052px) and (max-width: 1440px) {
  .carousel {

    &__arrow {
      padding: 0 12px 0 12px;
    }

    &__content {
      padding: 237px 64px 0 64px;
    }

    &__title {
      @include roboto-text(500, 32px, $white);
      white-space: normal;
    }

    &__caption {
      @include roboto-text(300, 22px, $gray);
      white-space: normal;
    }

  }
}

@media screen and (min-width: 768px) and (max-width: 1052px) {
  .carousel {
    display: none;
  }
}

@media screen and (min-width: 0) and (max-width: 768px) {
  .carousel {
    display: none;
  }
}
</style>
