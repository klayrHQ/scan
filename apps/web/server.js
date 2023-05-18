// eslint-disable-next-line @typescript-eslint/no-var-requires
const next = require("next");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parse, } = require("url");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createServer, } = require("http");
// eslint-disable-next-line turbo/no-undeclared-env-vars
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port, });
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query, } = parsedUrl;

      await app.render(req, res, pathname, query);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
