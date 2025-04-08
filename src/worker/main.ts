import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/call", async (c) => {
  const name = c.req.query("name");

  return c.json({ message: `Hello ${name}` });
});

export default app;
