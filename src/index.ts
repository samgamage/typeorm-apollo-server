import "reflect-metadata";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import * as path from "path";

import { IOptions } from "./types/graphql-utils";
import { resolvers } from "./resolvers";

// relative path ./schema.graphql does not work
// to fix path we use path.join from node passing in the __dirname and realtive path

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));

const options: IOptions = {
  port: 8090,
};

const server = new GraphQLServer({ typeDefs, resolvers });

createConnection().then(() => {
  server.start(options, ({ port }) =>
    console.log(`🚀  Server is running on localhost:${port}`)
  );
});
