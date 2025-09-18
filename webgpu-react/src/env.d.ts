/// <reference types="vite/client" />

// (Optional) If you use CSS modules:
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// (Optional) If you import images:
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
