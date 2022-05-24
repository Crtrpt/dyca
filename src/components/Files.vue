<template>
  <template v-for="r in data" :key="r">
    <div
      class="text-sm text-gray-600 border py-1 hover:bg-gray-100 cursor-pointer flex items-center"
      :class="{
        ' border-blue-500 bg-blue-500 bg-opacity-10': cur == r,
        'border-white': cur != r,
        ['pl-' + (level * 4 + 2)]: true,
      }"
      @click="setCurFile(r)"
    >
      <template v-if="r.type == 'file'">
        <font-awesome-icon :icon="r.type" class="px-2" />
      </template>
      <template v-if="r.type == 'folder'">
        <font-awesome-icon v-if="r._open" icon="folder-open" class="px-2" />
        <font-awesome-icon v-else icon="folder-closed" class="px-2" />
      </template>
      <div>{{ r.name }}</div>
    </div>
    <Files
      :data="r.children"
      v-if="r._open && (r?.children?.length || 0 > 0)"
      :level="level + 1"
    ></Files>
  </template>
</template>

<script lang="ts">
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "Files",
  computed: {
    ...mapState(useFileStore, ["cur"]),
  },
  methods: {
    ...mapActions(useFileStore, ["setCurFile"]),
  },
  props: {
    data: Array,
    level: {
      type: Number,
      default: 0,
    },
  },
  components: {},
};
</script>
