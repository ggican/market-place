// https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/index.js
import type { SetupWorkerApi } from "msw/browser";
import type { SetupServerApi } from "msw/node";

if (typeof window === "undefined") {
  const { mswServer }: { mswServer: SetupServerApi } = require("@lib/mocks/msw-server");

  mswServer.listen({
    onUnhandledRequest: "bypass",
  });
} else {
  const { worker }: { worker: SetupWorkerApi } = require("@lib/mocks/msw-browser");

  worker.start({
    onUnhandledRequest: "bypass",
  });
}
