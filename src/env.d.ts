/// <reference types="vite/client" />

declare module '*.jpg' {
  const jpgImagePath: string;
  export default jpgImagePath;
}

declare module '*.png' {
  const pngImagePath: string;
  export default pngImagePath;
}

declare module '*.jpeg' {
  const jpegImagePath: string;
  export default jpegImagePath;
}
