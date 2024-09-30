/**
 * https://nuxt.com/docs/api/configuration/nuxt-config
 * nuxt.config.ts 파일은 Nuxt 프로젝트의 루트에 위치하며 애플리케이션의 동작을 재정의하거나 확장할 수 있습니다.
 */

export default defineNuxtConfig({
  runtimeConfig: {
    /**
     * 서버 측에서만 사용 가능한 개인 키
     */
    key: 'value',

    public: {
      /**
       * 공개 키는 클라이언트 측에도 노출됩니다.
       */
      key: 'value'
    }
  },

  /**
   * Vite 설정 필요 시
   * https://nuxt.com/docs/api/nuxt-config#vite
   */
  vite: {},

  /**
   * Server Engine
   */
  nitro: {},

  plugins: ['~/plugins/page-hook'],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
