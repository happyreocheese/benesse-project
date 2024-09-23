const express = require('express');
const cors = require('cors'); // 追加
const sqlite3 = require('sqlite3').verbose();
const app = express();

// CORSの設定を追加
app.use(cors());

app.get('/api/buttons', (req, res) => {
  const searchTerm = req.query.term;
  const db = new sqlite3.Database('./buttons.db');
  
  db.all("SELECT * FROM buttons WHERE label = ?", [searchTerm], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });

  db.close();
});

app.listen(3001, () => console.log('Server running on port 3001'));
