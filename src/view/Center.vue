<template>
  <div
    class="overflow-auto flex flex-col relative flex-grow border-x bg-gray-200"
  >
    <div class="flex flex-row-reverse m-5 absolute right-0">
      <Action class="transition-all"></Action>
    </div>
    <div><Editor :file="cur" v-if="cur != null"></Editor></div>
  </div>
</template>

<script lang="ts">
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";
import Action from "../components/Action.vue";

export default {
  name: "Center",
  setup() {
    const file = useFileStore();
    return { file };
  },
  data() {
    return {
      status: "normal",
      editor: null,
    };
  },
  methods: {},
  computed: {
    cur: {
      get() {
        var cur = this.file.cur;
        return cur;
      },
      set: () => {},
    },
  },
  mounted() {},
  components: { Action },
};
</script>
