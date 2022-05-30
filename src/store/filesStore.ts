import { defineStore } from "pinia";
export const useFileStore = defineStore("filesStore", {
  state: () => {
    return {
      root: [
        {
          name: "v4.0.1",
          type: "folder",
          _open: false,
          children: [
            {
              name: "f1",
              type: "file",
              hashCode: "11",
            },
            {
              name: "f2",
              type: "file",
              hashCode: "22",
            },
          ],
        },
        {
          name: "v4.0.2",
          type: "folder",
          _open: false,
          children: [
            {
              name: "f1",
              type: "file",
              hashCode: "33",
            },
            {
              name: "f2",
              type: "file",
              hashCode: "44",
            },
          ],
        },
        {
          name: "v4.0.3",
          type: "folder",
          _open: false,
          children: [
            {
              name: "f1",
              type: "file",
              hashCode: "55",
              content: {
                time: 1653898385929,
                blocks: [
                  {
                    id: "0gv17WvZw0",
                    type: "paragraph",
                    data: { text: "文件111" },
                  },
                ],
                version: "2.24.3",
              },
            },
            {
              name: "f2",
              type: "file",
              hashCode: "66",
              content: {
                time: 1653898385929,
                blocks: [
                  {
                    id: "0gv17WvZw0",
                    type: "paragraph",
                    data: { text: "文件222" },
                  },
                ],
                version: "2.24.3",
              },
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
    save(f:any){
      this.cur!.content=f;
    }
  },
});
