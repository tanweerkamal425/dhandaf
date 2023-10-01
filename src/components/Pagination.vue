<template>
	<div class="pagination">
        <a @click.prevent="$emit('onPrev')">&laquo;</a>
        <a>{{ page }}</a>
        <a @click.prevent="$emit('onNext')">&raquo;</a>
    </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  emits: ["onNext", "onPrev"],
}
</script>
