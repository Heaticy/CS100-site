import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://heaticy.github.io",
  base: "/CS100-site",
  output: "static",
  devToolbar: {
    enabled: false
  }
});
