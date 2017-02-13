CREATE DATABASE IF NOT EXISTS edufy;

USE edufy;

CREATE TABLE IF NOT EXISTS users (
	username VARCHAR(100) PRIMARY KEY NOT NULL
    , pass VARCHAR(100) NOT NULL
    , tutor_student VARCHAR(100) NOT NULL
    , rating FLOAT(12) NOT NULL DEFAULT 0
    , sessions INT(12) NOT NULL DEFAULT 0
);
