import {customer, PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import * as path from "path";
import * as fs from "fs";

const db = new PrismaClient();

const doStuff = () => {
  const bookings = db.booking.findMany({ where: { customerId: 123 } })
}
const resolvers = {
  Query: {
    getCustomerByEmail: async (parent: string, data: unknown, context: unknown): Promise<customer | null> => {
      // @ts-ignore
      const customers = await db.customer.findMany({ where: { email: data.email }});
      if (customers.length) {
        return customers[0];
      }
      return null
    },
  },
  Mutation: {
    addCustomer: async (parent: string, data: unknown, context: unknown) => {
      // @ts-ignore
      const newCustomer = await db.customer.create({ data });
      return newCustomer
    }
  }
};

const schemaPath = path.join(__dirname, './graphql/schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf8');
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
