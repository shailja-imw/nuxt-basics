
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  }
});


