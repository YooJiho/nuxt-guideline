/**
 * Nuxt는 ~/server/plugins 디렉토리의 모든 파일을 자동으로 읽고 Nitro 플러그인으로 등록합니다.
 * 이를 통해 Nitro의 런타임 동작을 확장하고 라이프사이클 이벤트에 연결할 수 있습니다.
 */

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response, { event }) => {})
})
