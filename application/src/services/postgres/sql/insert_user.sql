-- sql/github_user.sql
INSERT INTO github_user (${columns:name}) VALUES (${values:csv}) RETURNING id;