import { createSchema, createYoga } from 'graphql-yoga';
export { renderers } from '../../renderers.mjs';

const ShoppingCart = [
  {
    id: 1,
    name: "Apple",
    price: 0.59,
    qty: 4
  },
  {
    id: 2,
    name: "Shampoo",
    price: 1.2,
    qty: 3
  },
  {
    id: 3,
    name: "Wholemeal bread",
    price: 0.75,
    qty: 1
  },
  {
    id: 4,
    name: "Dozen eggs - large",
    price: 2.95,
    qty: 2
  },
  {
    id: 5,
    name: "Large mayonnaise",
    price: 1.43,
    qty: 1
  }
];

const schema = createSchema({
  typeDefs: `
    type CartItem {
      id: Int!
      name: String!
      price: Float!
      qty: Int!
    }
    type Query {
      cart: [CartItem!]
    }    
  `,
  resolvers: {
    Query: {
      cart: () => ShoppingCart
    }
  }
});
const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Request,
    Response
  }
});
const POST = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
