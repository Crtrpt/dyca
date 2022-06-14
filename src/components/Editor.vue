<template>
  <div class="shadow rounded mx-auto p-10 mt-20" id="editorjs"></div>
</template>

<script lang="ts">
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import { useFileStore } from "../store/filesStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "Editor",
  props: {
    file: Object,
  },
  methods: {
    ...mapActions(useFileStore, ["save"]),
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    file: {
      deep: true,
      handler(n, o) {
        if (n.type != "file") {
          return;
        }
        if ((n?.hashCode || true) == (o?.hashCode || false)) {
          return;
        }
        if (this.editor) {
          console.log("=============");
          console.log(this.editor);
          this.editor.destroy();
        }
        const editor = (this.editor = new EditorJS({
          holder: "editorjs",
          autofocus: true,
          placeholder: "输入你要发表的内容",
          data: this.file.content || [],
          tools: {
            ImageTool,
            Table,
            CodeTool,
            Paragraph,
            Quote,
            List,
            Header,
          },
          onReady: () => {
            console.log("初始化");
          },
          onChange: (api, event) => {
            //TODO 延迟保存
            editor
              .save()
              .then((outputData) => {
                this.save(outputData);
                console.log("Article data: ", JSON.stringify(outputData));
              })
              .catch((error) => {
                console.log("Saving failed: ", error);
              });
          },
        }));
      },
    },
  },
};
</script>

<style>
#editorjs {
  background-color: white;
  width: 210mm;
  min-height: 297mm;
}
.ce-block__content,
.ce-toolbar__content {
  max-width: unset;
  margin: 0px 20px;
}
</style>
