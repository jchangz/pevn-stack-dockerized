CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name character varying(255) NOT NULL UNIQUE,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
INSERT INTO users (id, user_name)
VALUES (1, 'Database Connected');