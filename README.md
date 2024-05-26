Dùng frontend, not frontendV2

Hai cách chạy Backend vs Mysql:

1. Chạy local:
<!-- backend\models\index.js -->
const sequelize = new Sequelize("vdt", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});


2. Chạy docker compose:
<!-- backend\models\index.js -->
const sequelize = new Sequelize("vdt", "root", "tranminhhuyen123@", {
  host: "mysql",
  dialect: "mysql",
  port: 3306,
});
