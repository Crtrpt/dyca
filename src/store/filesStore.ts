import { defineStore } from "pinia";
export const useFileStore = defineStore("filesStore", {
  state: () => {
    return {
      root: [
        {
          name: "v4.0.1",
          type: "folder",
          _open: false,
          _level: 0,
          _delete: false,
          children: [
            {
              name: "f1",
              type: "file",
              hashCode: "11",
              _level: 1,
              _delete: false,
            },
            {
              name: "f2",
              type: "file",
              hashCode: "22",
              _level: 1,
              _delete: false,
            },
          ],
        },
        {
          name: "v4.0.2",
          type: "folder",
          _open: false,
          _level: 0,
          _delete: false,

          children: [
            {
              name: "f1",
              type: "file",
              hashCode: "33",
              _level: 1,
              _delete: false,
            },
            {
              name: "f2",
              type: "file",
              hashCode: "44",
              _level: 1,
              _delete: false,
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
    setCurFileV1(f: any) {
      this.cur = f;
    },
    removeFile() {
      this.cur._delete = true;
      this.cur = null;
    },
    createFile(fName: String) {
      if (this.cur) {
        if (this!.cur!.type == "folder") {
          console.log("增加文件");
          this.cur.children.push({
            name: fName,
            type: "file",
            hashCode: "66",
            _open: false,
            _delete: false,
            _level: this.cur._level + 1,
            content: {
              time: 1653898385929,
              blocks: [
                {
                  id: "0gv17WvZw0",
                  type: "paragraph",
                  data: { text: "新建文件" },
                },
              ],
              version: "2.24.3",
            },
          });
        }
      } else {
        this.root.push({
          name: fName,
          type: "file",
          hashCode: "66",
          _open: false,
          _delete: false,
          _level: 0,
          content: {
            time: 1653898385929,
            blocks: [
              {
                id: "0gv17WvZw0",
                type: "paragraph",
                data: { text: "新建文件" },
              },
            ],
            version: "2.24.3",
          },
        });
      }
    },
    createFolder(fName: String) {
      if (this.cur) {
        if (this!.cur!.type == "folder") {
          console.log(this.cur);
          console.log("增加文件夹" + (this.cur._level + 1));
          this.cur.children.push({
            name: fName,
            type: "folder",
            _open: false,
            _delete: false,
            _level: this.cur._level + 1,
            hashCode: "66",
            children: [],
          });
        }
      } else {
        this.root.push({
          name: fName,
          type: "folder",
          _open: false,
          _delete: false,
          _level: 0,
          hashCode: "66",
          children: [],
        });
      }
    },
    save(f: any) {
      this.cur!.content = f;
    },
  },
});
