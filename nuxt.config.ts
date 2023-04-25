
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  app:{
    head:{
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", 
          crossorigin: "anonymous"
        },
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js",
          crossorigin: "anonymous"
        }
      ],
    }
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api' 
    }
  },
});

