import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevSerer = ({ port }: BuildOptions): DevServerConfiguration => ({
  port,
  open: true
})