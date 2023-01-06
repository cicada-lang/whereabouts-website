<script setup>
import { mathBox } from 'mathbox'
import 'mathbox/mathbox.css'
import { onMounted, ref } from 'vue'

const element = ref(null)

onMounted(() => {
  const mathbox = mathBox({ element: element.value })

  mathbox.set({ focus: 3 })

  const camera = mathbox.camera({
    proxy: true,
    position: [0, 0, 3],
  })

  const view = mathbox.cartesian({
    range: [
      [-2, 2],
      [-1, 1],
    ],
    scale: [2, 1],
  })

  view
    .axis({ axis: 1, width: 3 })
    .axis({ axis: 2, width: 3 })
    .grid({ width: 2, divideX: 20, divideY: 10 })

  const data = view.interval({
    expr: (emit, x, i, t) => {
      emit(x, Math.sin(x + t))
    },
    width: 64,
    channels: 2,
  })

  const curve = view.line({
    width: 4,
    color: 'orange',
  })
})
</script>

<template>
  <div class="h-screen w-screen" ref="element"></div>
</template>
