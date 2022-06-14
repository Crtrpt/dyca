<template>
  <div class="overflow-auto flex flex-col relative">
    <div class="flex flex-row-reverse m-5 absolute right-0">
      <Action class="transition-all"></Action>
    </div>
    <div><Editor :file="cur"></Editor></div>
  </div>
</template>

<script lang="ts">
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";
import Editor from "./Editor.vue";
import Action from "./Action.vue";

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
  components: { Editor, Action },
};
</script>

<style></style>
