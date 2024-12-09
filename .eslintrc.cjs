module.exports = {
  root: true, // ESLint'in kök yapılandırma olduğunu belirtir
  env: {
    browser: true, // Tarayıcı ortamı
    node: true, // Node.js ortamı
  },
  extends: [
    'eslint:recommended', // Genel önerilen kurallar
    'plugin:vue/vue3-recommended', // Vue 3 için önerilen kurallar
    '@vue/eslint-config-prettier', // Prettier ile uyumluluk
  ],
  parserOptions: {
    ecmaVersion: 2023, // Güncel ECMAScript özelliklerini kullanabilmek için 2023
    sourceType: 'module', // ES6 modül sistemi
  },
  rules: {
    // Vue özel kuralları
    'vue/multi-word-component-names': 'off', // Çok kelimeli component adlandırma kuralını kapatır
    'no-console': 'warn', // Konsol kullanımına uyarı verir
    'no-debugger': 'error', // Debugger kullanımı hata olarak işaretlenir
  },
};
