import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  outputDir: "reports",
  reporter: [
    ["junit", "./CustomListReporter.ts"],
  ],
};

export default config;