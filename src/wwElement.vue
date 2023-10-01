<template>
  <div ref="container" class="monaco-editor-container"></div>
  <button @click="() => save()">Save</button>
</template>

<script setup>
import {ref, computed, watch, onMounted} from 'vue';

let editorInstance = null;

const props = defineProps({
  content: {
    type: Object,
    required: true
  },
})

const emit = defineEmits(['trigger-event'])

const save = () => {
  const editorContents = editorInstance.getValue();
  console.log("Save", editorContents)
  emit("trigger-event", {name: "update:selectedNode", event: {editorContents}})
}

const container = ref(null);

const loadMonacoScript = () => {
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
};

const initializeMonacoEditor = () => {
  window.require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs",
    },
  });
  window.require(["vs/editor/editor.main"], () => {
    editorInstance = window.monaco.editor.create(container.value, {
      value: props.content.content,
      language: "javascript",
      theme: "vs-dark",
    });
  });
};

onMounted(() => {
  loadMonacoScript().then(() => {
    initializeMonacoEditor();
  });
});
</script>

<style scoped>
.monaco-editor-container {
  height: 100%;
  width: 100%;
  border: 1px solid black;
}
</style>
