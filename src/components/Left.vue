<template>
  <div class="select-none flex" ref="file">
    <div
      class="text-gray-500 text-sm flex flex-row-reverse py-2"
      @click="
        () => {
          setCurFileV1(null);
        }
      "
    >
      <font-awesome-icon
        icon="folder-plus"
        class="px-2 cursor-pointer hover:text-blue-900"
        @click="
          () => {
            showFolderDialog = true;
          }
        "
      />
      <font-awesome-icon
        icon="file-circle-plus"
        class="px-2 cursor-pointer hover:text-blue-900"
        @click="
          () => {
            showFileDialog = true;
          }
        "
      />
      <NewFile v-model="showFileDialog"></NewFile>
      <NewFolder v-model="showFolderDialog"></NewFolder>
      <DeleteConfirm
        v-model="showDeleteConfirmDialog"
        :showDeleteConfirmDialogTitle="showDeleteConfirmDialogTitle"
        :showDeleteConfirmDialogDesc="showDeleteConfirmDialogDesc"
      ></DeleteConfirm>
    </div>
    <div class="border-t relative flex-grow overflow-auto" >
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
import { mapActions } from "pinia";

export default {
  name: "Left",
  components: { NewFile, NewFolder },
  computed: {
    ...mapState(useFileStore, ["root", "cur"]),
  },
  methods: { ...mapActions(useFileStore, ["setCurFile", "setCurFileV1","setRename","copy","paste"]) },
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
      {
        text: "复制",
        value: "copy",
        onclick: () => {
           this.copy();
        },
      },
       {
        text: "粘贴",
        value: "past",
        onclick: () => {
           this.paste();
        },
      },
      null,
      {
        text: "重命名",
        value: "rename",
        onclick: () => {
          this.setRename();
        },
      },
      null,
      {
        text: "删除",
        value: "remove",
        onclick: () => {
          this.showDeleteConfirmDialogTitle =
            "删除" + (this.cur.type == "file" ? "文件" : "目录");
          this.showDeleteConfirmDialogDesc =
            "确认删除" + (this.cur.type == "file" ? "文件" : "目录");
          this.showDeleteConfirmDialog = true;
        },
      },
    ]);
    menu.install();
  },
  data() {
    return {
      showFileDialog: false,
      showFolderDialog: false,
      showDeleteConfirmDialog: false,
      showDeleteConfirmDialogTitle: "",
      showDeleteConfirmDialogDesc: "",
    };
  },
};
</script>
