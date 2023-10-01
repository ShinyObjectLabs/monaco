<template>
  <div>
    <div ref="editorContainer" style="height: 500px;"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.initializeMonacoEditor();
  },
  methods: {
    initializeMonacoEditor() {
      this.editor = monaco.editor.create(this.$refs.editorContainer, {
        value: `function x() {
          console.log("Hello world!");
        }`,
        language: 'javascript',
        theme: 'vs-dark',
      });

      this.editor.onDidChangeModelContent(() => {
        this.handleEditorChange();
      });
    },
    handleEditorChange() {
      console.log("Editor content changed:", this.editor.getValue());
    },
  },
};
</script>
