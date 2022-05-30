<template>
  <div class="overflow-scroll flex flex-col relative">
    <div class="flex flex-row-reverse m-5 absolute right-0">
      <div
        class=" text-sm rounded-full px-6 py-1 cursor-pointer bg-blue-400 hover:bg-blue-500 hover:shadow-sm text-white"
      >
        发布
      </div>
    </div>
    <div><Editor :file="cur" ></Editor></div>
  </div>
</template>

<script lang="ts">
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";
import Editor from "./Editor.vue";

export default {
    name: "Center",
    setup() {
        const file = useFileStore();
        return { file };
    },
    data() {
        return {
            editor: null,
        };
    },
    computed: {
        cur: {
            get() {
                var cur = this.file.cur;
                return cur;
            },
            set: () => { },
        },
    },
    mounted() { },
    components: { Editor }
};
</script>

<style>

</style>
