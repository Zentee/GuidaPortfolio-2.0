// pages/api/pdf-access.js
export default function handler(req, res) {
  const { path, password } = req.body;

  const passwords = {
    "/golem": process.env.GOLEM_PDF_PASSWORD,
    "/nano": process.env.NANO_PDF_PASSWORD,
    "/betterroaming": process.env.BETTERROAMING_PDF_PASSWORD,
    "/1global": process.env.ONEGLOBAL_PDF_PASSWORD,
  };

  const urls = {
    "/golem":
      "https://drive.google.com/file/d/1DSIvps4pnoi_Yse0KnuWbnx1GLaB6YT2/view?usp=sharing",
    "/nano":
      "https://drive.google.com/file/d/1nnFUiuakZ4mu01l5IorO-0c1xV4yLyaG/view",
    "/betterroaming":
      "https://drive.google.com/file/d/1OafIWJoFADy5-4X9fkrQK8IpOP_IT--I/view?usp=sharing",
    "/1global":
      "https://drive.google.com/file/d/1GExB16OfcQ-sd45bdoQLSmM0Pz3k-ggk/view?usp=sharing",
  };

  if (!passwords[path]) {
    return res.status(400).json({ error: "Invalid path" });
  }

  if (passwords[path] === password) {
    return res.status(200).json({ url: urls[path] });
  } else {
    return res.status(401).json({ error: "Incorrect password" });
  }
}
