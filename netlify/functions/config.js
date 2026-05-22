exports.handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    mode: process.env.APP_MODE || "service",
    appUrl: process.env.APP_URL || ""
  })
});
