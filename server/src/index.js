import http from "node:http";

const PORT = Number(process.env.PORT || 5050);

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => {
      data += c;
      if (data.length > 20_000) {
        reject(new Error("too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sanitize(value = "", max = 1000) {
  return String(value).replace(/[<>]/g, "").trim().slice(0, max);
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && (req.url === "/" || req.url === "/api/health")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        ok: true,
        status: "healthy",
        service: "Sri Sai Designing Boutique API",
        time: new Date().toISOString(),
      })
    );
    return;
  }

  if (req.url === "/api/enquiries") {
    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
      return;
    }

    try {
      const raw = await readBody(req);
      const json = JSON.parse(raw || "{}");
      const enquiry = {
        name: sanitize(json.name, 80),
        phone: sanitize(json.phone, 15),
        email: sanitize(json.email, 120),
        service: sanitize(json.service, 80),
        message: sanitize(json.message, 1000),
        createdAt: new Date().toISOString(),
      };
      if (enquiry.name.length < 2 || !/^[6-9]\d{9}$/.test(enquiry.phone.replace(/\D/g, "").slice(-10))) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: "Invalid enquiry" }));
        return;
      }
      // Ready for MongoDB: if MONGODB_URI is set, persist here in a future module.
      console.log("[enquiry]", enquiry);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: "Bad request" }));
    }
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Enquiry API on http://localhost:${PORT}`);
});
