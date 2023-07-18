DO
$do$
BEGIN
   IF EXISTS (SELECT FROM pg_database WHERE datname = 'ghinfo') THEN
      RAISE NOTICE 'Database already exists';
   ELSE
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE ghinfo OWNER ghinfo_user');
   END IF;
END
$do$;