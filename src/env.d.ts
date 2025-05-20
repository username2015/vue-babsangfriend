/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*.jpg' {
  const jpgImagePath__custom: string;
  export default jpgImagePath__custom;
}

declare module '*.png' {
  const pngImagePath__custom: string;
  export default pngImagePath__custom;
}

declare module '*.jpeg' {
  const jpegImagePath__custom: string;
  export default jpegImagePath__custom;
}
