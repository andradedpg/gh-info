-- Create a sequence for the id column with minimum and maximum values
CREATE SEQUENCE IF NOT EXISTS github_user_id_seq
    START WITH 1     
    INCREMENT BY 1   
    MINVALUE 1       
    MAXVALUE 1000000000 
    NO CYCLE;  
-- Create the github_user table if it doesn't exist
CREATE TABLE IF NOT EXISTS github_user (
    id INT DEFAULT nextval('github_user_id_seq') PRIMARY KEY,
    login VARCHAR,
    node_id VARCHAR,
    avatar_url VARCHAR,
    gravatar_id VARCHAR,
    url VARCHAR,
    html_url VARCHAR,
    followers_url VARCHAR,
    following_url VARCHAR,
    gists_url VARCHAR,
    starred_url VARCHAR,
    subscriptions_url VARCHAR,
    organizations_url VARCHAR,
    repos_url VARCHAR,
    events_url VARCHAR,
    received_events_url VARCHAR,
    type VARCHAR,
    site_admin BOOLEAN,
    name VARCHAR,
    company VARCHAR,
    blog VARCHAR,
    location VARCHAR,
    email VARCHAR,
    hireable BOOLEAN,
    bio TEXT,
    twitter_username VARCHAR,
    public_repos INT,
    public_gists INT,
    followers INT,
    following INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);