export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  triggerEvents: [
    {
      name: "update:content",
      label: {en: "On editor content update"},
      event: {value: ""},
      default: true
    }
  ],
  properties: {
    content: {
      label: {
        en: "Content",
      },
      type: "Text",
      defaultValue: "function x() {\n  console.log(\"Hello world!\");\n}",
    },
  },
};
