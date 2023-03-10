module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "vue/require-default-prop": "off",

    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
