# プロフェッショナルプログラミング 第四講

## 動かし方

1. Git Bash などのターミナルを起動
1. クローンして作業ディレクトリに移動
1. 環境変数にポートを指定
   ```
   echo "PORT=8000" > .env
   ```
1. イメージをビルドしてコンテナへ
   ```
   docker-compose up -d --build
   docker-compose exec app bash
   ```
1. データベースにデータを追加
   ```
   node db/migrations/migration.js
   ```
1. サーバー起動
   ```
   yarn start
   ```
