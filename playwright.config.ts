import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  outputDir: "reports",
  reporter: [
    ["junit", "./reports/report.xml"],
  ],
};

export default config;
