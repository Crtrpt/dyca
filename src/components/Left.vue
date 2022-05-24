<template>
  <div class="select-none">
    <Files :data="root" class="flex-col"></Files>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { useFileStore } from "../store/filesStore";
export default {
  name: "Left",
  components: {},
  computed: {
    ...mapState(useFileStore, ["root"]),
  },
  setup() {
    const fileStore = useFileStore();
    return {
      fileStore,
    };
  },
  data() {
    return {};
  },
};
</script>
