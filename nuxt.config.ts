
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  app:{
    head:{
      script: [
        {
          src: "/bootstrap/popper.min.js",
          crossorigin: "anonymous"
        },
        {
          src: "bootstrap/dist/js/bootstrap.bundle.min.js",
          crossorigin: "anonymous"
        }
      ],
    }
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api' 
    }
  }
});


