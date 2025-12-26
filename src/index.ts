import { serve } from "bun";
import { Database } from "bun:sqlite";
import index from "./index.html";
import game from "./game.html";

const db = new Database("giftdb.sqlite", { create: true, strict: true });

function createDB(db: Database) {
  // Always drop if not in production
  if (process.env.NODE_ENV !== "production") {
    db.run(`DROP TABLE IF EXISTS rooms;`);
    db.run(`DROP TABLE IF EXISTS players;`);
    db.run(`DROP TABLE IF EXISTS hosts;`);
    db.run(`DROP TABLE IF EXISTS giftLinks;`);
    db.run(`DROP TABLE IF EXISTS gifts;`);
    db.run(`DROP TABLE IF EXISTS gifterGuesses;`);
    db.run(`DROP TABLE IF EXISTS linkedGiftGuesses;`);
    db.run(`DROP TABLE IF EXISTS linkGuesses;`);
    db.run(`DROP TABLE IF EXISTS turnOrder;`);
  }

  const roomTable = db.query(`CREATE TABLE IF NOT EXISTS rooms (
    id INT PRIMARY KEY   NOT NULL,
    code           TEXT  NOT NULL,
    active         INT   NOT NULL DEFAULT TRUE,
    started        INT   NOT NULL DEFAULT FALSE,
    UNIQUE(active, code) ON CONFLICT ROLLBACK
  );`);
  roomTable.run();

  const playerTable = db.query(`CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY   NOT NULL,
    displayName    TEXT  NOT NULL,
    roomId         INT   NOT NULL,
    FOREIGN KEY(roomId) REFERENCES rooms(id),
    UNIQUE(roomId, displayName) ON CONFLICT ROLLBACK
  );`)
  playerTable.run();

  const hostsTable = db.query(`CREATE TABLE IF NOT EXISTS hosts (
    roomId        INT   NOT NULL,
    playerId      INT   NOT NULL,
    PRIMARY KEY(roomId, playerId),
    FOREIGN KEY(roomId) REFERENCES rooms(id),
    FOREIGN KEY(playerId) REFERENCES players(id),
  );`);
  hostsTable.run();

  const giftLinksTable = db.query(`CREATE TABLE IF NOT EXISTS giftLinks (
    id INT PRIMARY KEY   NOT NULL,
    desc           TEXT  NOT NULL
  );`);
  giftLinksTable.run();

  const giftTable = db.query(`CREATE TABLE IF NOT EXISTS gifts (
    id INT PRIMARY KEY   NOT NULL,
    desc           TEXT  NOT NULL,
    giftNum        INT   NOT NULL,
    linkId         INT   NOT NULL,
    gifterId       INT   NOT NULL,
    roomId         INT   NOT NULL,
    UNIQUE(giftNum, roomId) ON CONFLICT ROLLBACK,
    FOREIGN KEY(linkId) REFERENCES giftLinks(id),
    FOREIGN KEY(gifterId) REFERENCES players(id),
    FOREIGN KEY(roomId) REFERENCES rooms(id)
  );`);
  giftTable.run();

  const gifterGuessTable = db.query(`CREATE TABLE IF NOT EXISTS gifterGuesses (
    id  INT PRIMARY KEY   NOT NULL,
    guesserId       INT   NOT NULL,
    giftId          INT   NOT NULL,
    guessedGifterId INT   NOT NULL,
    roomId          INT   NOT NULL,
    FOREIGN KEY(guesserId) REFERENCES players(id),
    FOREIGN KEY(giftId) REFERENCES gifts(id),
    FOREIGN KEY(guessedGifterId) REFERENCES players(id),
    FOREIGN KEY(roomId) REFERENCES rooms(id),
    UNIQUE(giftId, guessedGifterId) ON CONFLICT ROLLBACK,
  );`);
  gifterGuessTable.run();

  const linkedGiftGuessTable = db.query(`CREATE TABLE IF NOT EXISTS linkedGiftGuesses (
    id  INT PRIMARY KEY   NOT NULL,
    guesserId       INT   NOT NULL,
    guesserGiftId   INT   NOT NULL,
    guessedGiftId   INT   NOT NULL,
    roomId          INT   NOT NULL,
    FOREIGN KEY(guesserId) REFERENCES players(id),
    FOREIGN KEY(guesserGiftId) REFERENCES gifts(id),
    FOREIGN KEY(guessedGiftId) REFERENCES gifts(id),
    FOREIGN KEY(roomId) REFERENCES rooms(id),
    UNIQUE(guesserGiftId, guessedGiftId) ON CONFLICT ROLLBACK,
  );`);
  linkedGiftGuessTable.run();

  const linkGuessTable = db.query(`CREATE TABLE IF EXISTS linkGuesses (
    id  INT PRIMARY KEY   NOT NULL,
    guesserId       INT   NOT NULL,
    giftId          INT   NOT NULL,
    guessedDesc     TEXT  NOT NULL,
    approved        INT   NOT NULL DEFAULT FALSE,
    roomId          INT   NOT NULL,
    FOREIGN KEY(guesserId) REFERENCES players(id),
    FOREIGN KEY(giftId) REFERENCES gifts(id),
    FOREIGN KEY(roomId) REFERENCES rooms(id)
  );`);
  linkGuessTable.run();

  const turnOrder = db.query(`CREATE TABLE IF EXISTS turnOrder (
    roomId          INT   NOT NULL,
    playerId        INT   NOT NULL,
    turnIdx         INT   NOT NULL,
    FOREIGN KEY(roomId) REFERENCES rooms(id),
    FOREIGN KEY(playerId) REFERENCES players(id),
    UNIQUE(roomId, turnIdx) ON CONFLICT ROLLBACK
  );`);
  turnOrder.run();
}

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/game": game,
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
