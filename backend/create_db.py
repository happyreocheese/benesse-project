import sqlite3

# データベースの接続 (データベースファイルが存在しない場合は新規作成)
conn = sqlite3.connect('buttons.db')
c = conn.cursor()

# テーブルの作成 (存在しない場合)
c.execute('''
    CREATE TABLE IF NOT EXISTS buttons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL,
        name TEXT NOT NULL,
        link TEXT NOT NULL
    )
''')

# データの挿入
c.execute("INSERT INTO buttons (label, name, link) VALUES ('投資', '投資全般', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('投資', '仮想通貨', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('投資', '不動産投資', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('投資', 'Fx', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('投資', '為替取引', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('借金', '借金全般', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('借金', '奨学金', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('借金', '消費者金融', '/review')")
c.execute("INSERT INTO buttons (label, name, link) VALUES ('奨学金', '奨学金', '/review')")

# 変更を保存して接続を閉じる
conn.commit()
conn.close()