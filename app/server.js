const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>DevOps CI/CD</title>
<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0d1117;
  color: #c9d1d9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: #161b22;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}

h1 {
  color: #58a6ff;
  margin-bottom: 10px;
}

.status {
  margin-top: 20px;
  padding: 10px 18px;
  border-radius: 20px;
  background: #238636;
  color: white;
  display: inline-block;
  font-weight: bold;
}

.footer {
  margin-top: 25px;
  font-size: 14px;
  color: #8b949e;
}
</style>
</head>

<body>
  <div class="card">
    <h1>🚀 CI/CD Pipeline Active</h1>
    <p>Containerized with Docker | Ready for Kubernetes</p>

    <div class="status">BUILD SUCCESS -Version 2</div>

    <div class="footer">
      DevOps Project by Meghaa 💛
    </div>
  </div>
</body>
</html>

  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
