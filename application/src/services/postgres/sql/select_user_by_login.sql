-- sql/select_user_by_login.sql
SELECT * FROM github_user WHERE 1 = 1 AND login = $1;