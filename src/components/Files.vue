<template>
  <template v-for="r in data" :key="r">
    <div
      v-if="r._delete == false"
      class="text-sm text-gray-600 border py-1 hover:bg-gray-100 cursor-pointer flex items-center"
      :class="{
        ' border-blue-500 bg-blue-500 bg-opacity-10': cur == r,
        'border-white': cur != r,
        ['pl-' + (r._level * 4 + 2)]: true,
      }"
      @click="setRouteWithCurFile(r)"
      @contextmenu="setCurFileV1(r)"
    >
      <template v-if="r.type == 'file'">
        <font-awesome-icon :icon="r.type" class="px-2 w-5" />
      </template>
      <template v-if="r.type == 'folder'">
        <font-awesome-icon v-if="r._open" icon="folder-open" class="px-2 w-5" />
        <font-awesome-icon v-else icon="folder-closed" class="px-2 w-5" />
      </template>
      <div  class=" flex-grow overflow-hidden"  v-if="!r._rename">{{ r.name }}</div>
      <input  class=" flex-grow input  p-0.5 mr-5 border" @keyup.enter="saveName(r)" v-if="r._rename" v-model="r.name" />
    </div>
    <div v-if="r._open && (r?.children?.length || 0 > 0) && r._delete == false">
      <Files :data="r.children"></Files>
    </div>
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
    ...mapActions(useFileStore, ["setCurFile", "setCurFileV1","setRename","saveName"]),
    setRouteWithCurFile(r) {
      console.log(this.$router);
      this.$router.push({ path: "/file" + r._path });
      this.setCurFile(r);
    }
  },
  props: {
    data: Array,
  },
  components: {},
};
</script>
