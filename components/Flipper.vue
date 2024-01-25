<template>
  <div
    class="flip-card"
    :style="`width: ${width}px; height: ${height}px`"
    :class="active ? 'flip-card-active' : null"
  >
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="front"
          alt=""
          :style="`width: ${width + 2}px; height: ${height + 2}px`"
        />
      </div>
      <div class="relative flip-card-back">
        <img
          :src="back"
          alt=""
          :style="`width: ${width + 2}px; height: ${height + 2}px`"
        />

        <!-- <div
          v-if="active"
          class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-xs font-bold text-center text-white fadeOut"
        >
          {{ employee }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['front', 'back', 'width', 'height', 'active'],
}
</script>