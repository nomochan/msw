import { jest } from "@jest/globals";
import { modules } from "../index.mjs";
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("", () => {
//   const server = setupServer(
//     rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
//       // http://example.com/examples へのリクエストをインターセプトして
//       // ステータスコード200を返す
//       return res(ctx.status(200));
//     })
//   );

  // Establish API mocking before all tests.
//   beforeAll(() => server.listen());
//   // Reset any request handlers that we may add during the tests,
//   // so they don't affect other tests.
//   afterEach(() => server.resetHandlers());
//   // Clean up after the tests are finished.
//   afterAll(() => server.close());
  test("", async () => {
    await modules.main();
  });
});
