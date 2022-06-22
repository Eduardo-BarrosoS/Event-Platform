import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4ok8atm0czk01z44ksiexdi/master',
    cache:  new InMemoryCache()
})