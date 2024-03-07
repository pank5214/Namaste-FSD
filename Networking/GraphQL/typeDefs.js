const typeDefs = `#graphql

type author {
    id: ID!
    name: string!
}

type book {
    id: ID!
    title: string!
    publishedYear = int
}
type Query {
    authors: [Author]
    bookd: [Book]
}

type Mutation {

}
`;

export default typeDefs;
