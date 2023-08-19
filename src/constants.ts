import packageJson from "../package.json";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

export const basename = isProduction
  ? `/${packageJson.homepage.split("/").filter(Boolean).pop()}`
  : "/";
