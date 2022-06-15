<template>
  <div class="p-2 h-10   text-gray-700 text-sm">{{cur?._path||''}}</div>
</template>

<script lang="ts">
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "Footer",
  computed: {
    ...mapState(useFileStore, ["cur"]),
  },
};
</script>
