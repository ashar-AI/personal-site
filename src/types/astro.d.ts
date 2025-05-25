declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/dist/runtime/server/render/astro/factory'
  const Component: AstroComponentFactory
  export default Component
}
