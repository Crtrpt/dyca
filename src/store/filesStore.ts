import { defineStore } from "pinia";
export const useFileStore = defineStore("filesStore", {
  state: () => {
    return {
      root: [
        {
          name: ".git",
          type: "folder",
          _open: false,
        },
        {
          name: "test",
          type: "folder",
          _open: false,
          children: [
            {
              name: "f1",
              type: "file",
            },
            {
              name: "f2",
              type: "file",
            },
          ],
        },
      ],
      cur: null,
    };
  },
  actions: {
    setCurFile(f: any) {
      f._open = !f._open;
      this.cur = f;
    },
  },
});
