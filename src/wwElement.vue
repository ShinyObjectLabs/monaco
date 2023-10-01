<template>
  <div ref="container" class="monaco-editor-container"></div>
</template>

<script>
export default {
  name: "MonacoEditor",
  mounted() {
    this.loadMonacoScript().then(() => {
      this.initializeMonacoEditor();
    });
  },
  methods: {
    loadMonacoScript() {
      return new Promise((resolve, reject) => {
        if (window.require) {
          resolve();  // If the script is already loaded
          return;
        }

        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js";
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    },
    initializeMonacoEditor() {
      window.require.config({
        paths: {
          vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
        },
      });
      window.require(["vs/editor/editor.main"], () => {
        window.monaco.editor.create(this.$refs.container, {
          value: `function x() {
  console.log("Hello world!");
}`,
          language: "javascript",
          theme: "vs-dark",
        });
      });
    }
  },
};
</script>

<style scoped>
.monaco-editor-container {
  height: 400px;
  border: 1px solid black;
}
</style>
