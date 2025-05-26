import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const requiredEnvVars = ["OPENPHONE_API_KEY"];

// Check for missing environment variables
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(
      `⚠️ WARNING: Missing required environment variable: ${envVar}`,
    );
  }
});

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
