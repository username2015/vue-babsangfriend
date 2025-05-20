/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*.jpg' {
  const imgPath: string;
  export default imgPath;
}

declare module '*.png' {
  const imgPath: string;
  export default imgPath;
}

declare module '*.jpeg' {
  const imgPath: string;
  export default imgPath;
}
