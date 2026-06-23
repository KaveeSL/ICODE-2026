/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.docx" {
  const src: string;
  export default src;
}

declare module "*.docx?url" {
  const src: string;
  export default src;
}

