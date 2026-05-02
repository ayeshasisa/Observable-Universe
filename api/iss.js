export default async function handler(req, res) {
  const r = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
}
