import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_4ccfaa11.mjs';
import 'html-escaper';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import gql from 'graphql-tag';
/* empty css                           */import 'clsx';

const client = new ApolloClient({
  uri: "http://localhost:4321/api/graphql",
  cache: new InMemoryCache()
});

const $$Astro$1 = createAstro();
const $$CartRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CartRow;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<tr> <td>${item.name}</td> <td>${item.qty}</td> <td>£${item.price}</td> <td><strong>£${(item.price * item.qty).toFixed(2)}</strong></td> </tr>`;
}, "/Users/abeyternater/Documents/astro-examples/astro-graphql/src/components/CartRow.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data, loading } = await client.query({
    query: gql`
    query ShoppingCart {
      cart {
        name
        price
        qty
      }
    }
  `
  });
  const cartItems = data.cart;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro and Graphql</title>${renderHead()}</head> <body> <h1>Welcome to the shopping cart</h1> <p>Here's what's in your shopping cart today:</p> ${loading && renderTemplate`<p>Loading your cart...</p>`} ${!loading && renderTemplate`<table> <thead> <tr> <th>Product name</th> <th>Quantity</th> <th>Item price</th> <th>Row total</th> </tr> </thead> <tbody> ${cartItems.map((item) => renderTemplate`${renderComponent($$result, "CartRow", $$CartRow, { "item": item })}`)} </tbody> </table>`} </body></html>`;
}, "/Users/abeyternater/Documents/astro-examples/astro-graphql/src/pages/index.astro", void 0);

const $$file = "/Users/abeyternater/Documents/astro-examples/astro-graphql/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
