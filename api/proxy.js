export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwPAMcJA0CPcgzYXHbWXdmNg-2rCYfDOoLENQNTvQiDu_QrVau8uf9WDZUmJM97VtFg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).json({ error: "Proxy error", details: err.toString() });
  }
}
