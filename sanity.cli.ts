import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./lib/sanity/config";

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  },
  project: {
    basePath: "/studio"
  },
  studioHost: 'qybrr'
});
