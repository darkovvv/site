CREATE TABLE USERS (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  address TEXT,
  role TEXT DEFAULT 'user',
  password TEXT NOT NULL,
  cart TEXT,
  orders TEXT,
  avatar TEXT
);

CREATE TABLE SERVICES (
  service_id INTEGER PRIMARY KEY AUTOINCREMENT,
  service_name TEXT NOT NULL,
  image TEXT,
  description TEXT,
  change TEXT,
  category TEXT
);
