<template>
  <div
    class="overflow-auto flex flex-col relative flex-grow border-x bg-gray-200"
  >
    <div
      class="text-gray-500 text-sm flex items-center justify-center py-2 h-full"
    >
      <font-awesome-icon
        icon="folder-plus"
        class="px-10 cursor-pointer w-10 h-10"
        @click="
          () => {
            showFolderDialog = true;
          }
        "
      />
      <font-awesome-icon
        icon="file-circle-plus"
        class="px-10 cursor-pointer w-10 h-10"
        @click="
          () => {
            showFileDialog = true;
          }
        "
      />
      <NewFile v-model="showFileDialog"></NewFile>
      <NewFolder v-model="showFolderDialog"></NewFolder>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  setup() {},
  data() {
    return {
      showFileDialog: false,
      showFolderDialog: false,
      showDeleteConfirmDialog: false,
      showDeleteConfirmDialogTitle: "",
      showDeleteConfirmDialogDesc: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
