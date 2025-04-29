CREATE DATABASE api_herois;

\c api_herois;

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    local VARCHAR(100) NOT NULL,
    foundation_year INTEGER  NOT NULL,
    founder VARCHAR(100) NOT NULL
);

INSERT INTO editoras (name, local, foundation_year, founder) VALUES
('Marvel', 'New York - USA', 1939, 'Martin Goodman' ),
('DC', 'New York - USA', 1934, 'Malcolm Wheeler-Nicholson');

CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    editora_id INTEGER REFERENCES editoras(id) ON DELETE SET NULL,
    year_creation INTEGER,
);

INSERT INTO herois (name, gender, editora_id, year_creation) VALUES 
('Iron Man', 'Male', 1, 1963),
('Scarlet Witch', 'Female', 1, 1964),
('Harley Quinn', 'Female', 2, 1992),
('Batman', 'Male', 2, 1939),
('Flash', 'Male', 2, 1940),
('Doctor Strange', 'Male', 1, 1963),
('Spider-Man', 'Male', 1, 1962),
('Jean Grey', 'Female', 1, 1963),
('Wonder Woman', 'Female', 2, 1941),
('Catwoman', 'Female', 2, 1940);


