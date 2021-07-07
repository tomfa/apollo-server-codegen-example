CREATE TABLE customer (
  "id" SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
  "name" VARCHAR,
  "email" VARCHAR UNIQUE NOT NULL,
  "phoneNumber" VARCHAR,
  "issuer" VARCHAR UNIQUE,
  "credits" INTEGER default 0,
  "enabled" BOOLEAN NOT NULL default true
);

CREATE TABLE resource (
  "id" SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
  "category" VARCHAR,
  "label" VARCHAR NOT NULL,
  "opensAt" TIMESTAMP NOT NULL,
  "closesAt" TIMESTAMP NOT NULL,
  "slotIntervalMinutes" INTEGER default 30,
  "slotDurationMinutes" INTEGER default 60,
  "seats" INTEGER NOT NULL,
  "enabled" BOOLEAN NOT NULL default true
);

CREATE TABLE booking (
  "id" SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
  "customerId" INTEGER,
  "resourceId" INTEGER NOT NULL,
  "startTime" TIMESTAMP NOT NULL,
  "endTime" TIMESTAMP NOT NULL,
  "canceled" BOOLEAN NOT NULL default false,
  "comment" VARCHAR,
  "seatNumber" INTEGER,
  FOREIGN KEY ("customerId") REFERENCES "customer"(id),
  FOREIGN KEY ("resourceId") REFERENCES "resource"(id)
);

