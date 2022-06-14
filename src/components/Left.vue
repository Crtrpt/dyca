<template>
  <div class="select-none">
    <div class="text-gray-500 text-sm flex flex-row-reverse py-2">
      <font-awesome-icon
        icon="folder-plus"
        class="px-2 cursor-pointer"
        @click="
          () => {
            showFolderDialog = true;
          }
        "
      />
      <font-awesome-icon
        icon="file-circle-plus"
        class="px-2 cursor-pointer"
        @click="
          () => {
            showFileDialog = true;
          }
        "
      />
      <NewFile v-model="showFileDialog"></NewFile>
      <NewFolder v-model="showFolderDialog"></NewFolder>
    </div>
    <div class="border-t relative" ref="file">
      <Files :data="root" class="flex-col"></Files>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { useFileStore } from "../store/filesStore";
import ContextMenu from "./ContextMenu.js";
import NewFile from "./NewFile.vue";
import NewFolder from "./NewFolder.vue";

export default {
  name: "Left",
  components: { NewFile, NewFolder },
  computed: {
    ...mapState(useFileStore, ["root"]),
  },
  methods: {},
  setup() {
    const fileStore = useFileStore();
    return {
      fileStore,
    };
  },
  mounted() {
    const menu = new ContextMenu(this.$refs.file, [
      {
        text: "新建目录",
        value: "save_widget",
        onclick: () => {
          this.showFolderDialog = true;
        },
      },
      {
        text: "新建文件",
        value: "save_widget",
        onclick: () => {
          this.showFileDialog = true;
        },
      },
      null,
      { text: "删除", value: "remove", onclick: () => {} },
    ]);
    menu.install();
  },
  data() {
    return {
      showFileDialog: false,
      showFolderDialog: false,
    };
  },
};
</script>
