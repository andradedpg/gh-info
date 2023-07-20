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

-- Create a sequence for the github_repo_id column with minimum and maximum values
CREATE SEQUENCE IF NOT EXISTS github_repo_id_seq
    START WITH 1    
    INCREMENT BY 1 
    MINVALUE 1     
    MAXVALUE 1000000000 
    NO CYCLE;     

-- Create the github_repo table if it doesn't exist
CREATE TABLE IF NOT EXISTS github_repo (
    github_repo_id INT DEFAULT nextval('github_repo_id_seq') PRIMARY KEY,
    github_user_id INT NOT NULL REFERENCES github_user(id),
    repo_id INT,
    node_id VARCHAR(255),
    name VARCHAR(255),
    full_name VARCHAR(255),
    private BOOLEAN,
    html_url VARCHAR(255),
    description TEXT,
    fork BOOLEAN,
    url VARCHAR(255),
    forks_url VARCHAR(255),
    keys_url VARCHAR(255),
    collaborators_url VARCHAR(255),
    teams_url VARCHAR(255),
    hooks_url VARCHAR(255),
    issue_events_url VARCHAR(255),
    events_url VARCHAR(255),
    assignees_url VARCHAR(255),
    branches_url VARCHAR(255),
    tags_url VARCHAR(255),
    blobs_url VARCHAR(255),
    git_tags_url VARCHAR(255),
    git_refs_url VARCHAR(255),
    trees_url VARCHAR(255),
    statuses_url VARCHAR(255),
    languages_url VARCHAR(255),
    stargazers_url VARCHAR(255),
    contributors_url VARCHAR(255),
    subscribers_url VARCHAR(255),
    subscription_url VARCHAR(255),
    commits_url VARCHAR(255),
    git_commits_url VARCHAR(255),
    comments_url VARCHAR(255),
    issue_comment_url VARCHAR(255),
    contents_url VARCHAR(255),
    compare_url VARCHAR(255),
    merges_url VARCHAR(255),
    archive_url VARCHAR(255),
    downloads_url VARCHAR(255),
    issues_url VARCHAR(255),
    pulls_url VARCHAR(255),
    milestones_url VARCHAR(255),
    notifications_url VARCHAR(255),
    labels_url VARCHAR(255),
    releases_url VARCHAR(255),
    deployments_url VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    pushed_at TIMESTAMP,
    git_url VARCHAR(255),
    ssh_url VARCHAR(255),
    clone_url VARCHAR(255),
    svn_url VARCHAR(255),
    homepage VARCHAR(255),
    size INT,
    stargazers_count INT,
    watchers_count INT,
    language VARCHAR(100),
    has_issues BOOLEAN,
    has_projects BOOLEAN,
    has_downloads BOOLEAN,
    has_wiki BOOLEAN,
    has_pages BOOLEAN,
    has_discussions BOOLEAN,
    forks_count INT,
    mirror_url VARCHAR(255),
    archived BOOLEAN,
    disabled BOOLEAN,
    open_issues_count INT,
    license VARCHAR(255),
    allow_forking BOOLEAN,
    is_template BOOLEAN,
    web_commit_signoff_required BOOLEAN,
    visibility VARCHAR(100),
    forks INT,
    open_issues INT,
    watchers INT,
    default_branch VARCHAR(100)
);
