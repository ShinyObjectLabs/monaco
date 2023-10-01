<template>
  <div>
    <div
        ref="editorContainer"
        style="width: 800px; height: 600px; border: 1px solid grey"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default {
  setup() {
    const editorContainer = ref(null);
    let editor = null;

    const initMonaco = () => {
      editor = monaco.editor.create(editorContainer.value, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n'
        ),
        language: 'javascript',
        theme: 'vs-dark',
        minimap: {
          enabled: false
        }
      });
    };

    onMounted(() => {
      initMonaco();
    });

    onBeforeUnmount(() => {
      if (editor) {
        editor.dispose();
      }
    });

    return {
      editorContainer,
    };
  },
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
