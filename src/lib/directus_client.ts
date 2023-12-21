import { createDirectus, rest } from "@directus/sdk";

export const directusClient = createDirectus(
  "https://startupnation.panel.dreamslab.dev/"
).with(rest());
