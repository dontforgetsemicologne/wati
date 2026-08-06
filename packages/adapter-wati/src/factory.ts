import { ValidationError } from "@chat-adapter/shared";
import { ConsoleLogger } from "chat";
import { WatiAdapter } from "./adapter";
import type { WatiAdapterConfig } from "./types";

const DEFAULT_USER_NAME = "wati-bot";

/**
 * Create a Wati WhatsApp adapter for Chat SDK.
 *
 * Reads `WATI_API_URL`, `WATI_ACCESS_TOKEN`, `WATI_WEBHOOK_SECRET`, and
 * `WATI_BOT_USERNAME` from the environment when fields are not provided in
 * `config`. Throws `ValidationError` if a required credential is missing.
 *
 * @param config - Adapter configuration. All fields are optional when the
 *   matching environment variable is set.
 */
export function createWatiAdapter(config?: WatiAdapterConfig): WatiAdapter {
  const logger = config?.logger ?? new ConsoleLogger("info").child("wati");
  const accessToken = config?.accessToken ?? process.env.WATI_ACCESS_TOKEN;
  const apiUrl = config?.apiUrl ?? process.env.WATI_API_URL;
  const webhookSecret =
    config?.webhookSecret ?? process.env.WATI_WEBHOOK_SECRET;
  if (!accessToken) {
    throw new ValidationError(
      "wati",
      "accessToken is required. Set WATI_ACCESS_TOKEN or provide it in config."
    );
  }
  if (!apiUrl) {
    throw new ValidationError(
      "wati",
      "apiUrl is required. Set WATI_API_URL or provide it in config."
    );
  }
  if (!webhookSecret) {
    throw new ValidationError(
      "wati",
      "webhookSecret is required. Set WATI_WEBHOOK_SECRET or provide it in config."
    );
  }
  return new WatiAdapter({
    accessToken,
    apiUrl,
    webhookSecret,
    userName:
      config?.userName ?? process.env.WATI_BOT_USERNAME ?? DEFAULT_USER_NAME,
    logger,
  });
}
