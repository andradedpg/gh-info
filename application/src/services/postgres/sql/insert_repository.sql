-- sql/insert_repository.sql
INSERT INTO github_repo (${columns:name}) VALUES (${values:csv});