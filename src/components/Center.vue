<template>
  <div class="overflow-scroll flex flex-col relative">
    <div class="flex flex-row-reverse m-5 absolute right-0">
      <div
        class=" transition-all text-sm rounded-full px-6 py-1 cursor-pointer border hover:bg-gray-100 hover:border-blue-500 hover:shadow-sm"
       
        @click="publish"
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
          status:"normal",
          editor: null,
        };
    },
    methods:{
     
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
