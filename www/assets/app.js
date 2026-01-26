(async () => {
  const el = document.getElementById("out");
  try {
    const r = await fetch("/api/health");
    const data = await r.json();
    el.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    el.textContent = "API error: " + (e?.message || e);
  }
})();