<template>
  <main class="h-screen overflow-hidden bg-black">
    <div class="grid grid-cols-16" v-if="curr < 144">
      <Flipper
        v-for="(n, i) in 144"
        :key="i"
        :front="`/foreground/photo-${n}.png`"
        :back="`/background/photo-${n}.png`"
        :width="width"
        :height="height"
        :active="arr[i] < curr"
      />
    </div>

    <video
      src="/bg-video.mp4"
      autoplay
      muted
      class="w-full h-full"
      v-else
    ></video>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  data() {
    return {
      width: 0,
      height: 0,
      arr: [
        31, 127, 9, 80, 138, 22, 93, 70, 2, 77, 124, 3, 94, 76, 5, 120, 101,
        132, 105, 92, 137, 73, 24, 53, 133, 88, 13, 7, 79, 121, 116, 20, 43, 98,
        97, 99, 136, 29, 89, 65, 60, 68, 52, 85, 67, 59, 51, 112, 34, 110, 12,
        38, 58, 33, 111, 69, 50, 39, 108, 11, 134, 6, 143, 72, 82, 81, 19, 27,
        84, 25, 119, 140, 126, 30, 62, 74, 129, 14, 91, 21, 90, 104, 41, 131,
        95, 10, 71, 47, 106, 42, 17, 83, 54, 55, 130, 141, 103, 66, 61, 75, 114,
        118, 86, 49, 28, 96, 78, 139, 128, 113, 64, 57, 46, 87, 0, 122, 125,
        115, 117, 32, 8, 135, 16, 48, 1, 4, 35, 56, 63, 15, 109, 26, 45, 102,
        100, 40, 123, 37, 36, 18, 107, 23, 142, 44,
      ],
      curr: 0,
    }
  },
  mounted() {
    this.width = window.innerWidth / 16
    this.height = window.innerHeight / 9

    setInterval(() => {
      this.getCounts()
    }, 200)
  },
  methods: {
    async getCounts() {
      await firebase
        .firestore()
        .collection('counts')
        .doc('count')
        .get()
        .then((data) => {
          this.curr = data.data().count
        })
        .catch((error) => {
          this.err = error
        })
    },
  },
}
</script>
