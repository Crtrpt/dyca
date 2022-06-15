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
          _path: "/v4.0.1",
          children: [
            {
              name: "f1",
              type: "file",
              _level: 1,
              _delete: false,
              _path: "/v4.0.1/f1",
            },
            {
              name: "f2",
              type: "file",

              _level: 1,
              _delete: false,
              _path: "/v4.0.1/f2",
            },
          ],
        },
        {
          name: "v4.0.2",
          type: "folder",
          _open: false,
          _level: 0,
          _delete: false,
          _path: "/v4.0.2",
          children: [
            {
              name: "f1",
              type: "file",

              _level: 1,
              _delete: false,
              _path: "/v4.0.2/f1",
            },
            {
              name: "f2",
              type: "file",
              _level: 1,
              _delete: false,
              _path: "/v4.0.2/f2",
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
    copy() {
      console.log(r);
      this.cur._rename = false;
    },
    paste() {
      console.log(r);
      this.cur._rename = false;
    },
    saveName(r) {
      console.log(r);
      this.cur._rename = false;
    },
    setRename(r) {
      this.cur._rename = true;
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
          children: [],
        });
      }
    },
    save(f: any) {
      this.cur!.content = f;
    },
  },
});
