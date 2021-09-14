import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from './resolvers/Resolvers'

const typeDefs = `type Query {
    hello : String
    products: [Product]
    categories: [Category]
    findCategory(_id: ID):Category
  }
  type Category {
    _id: ID
    title: String
    products: [Product]
  }
  type Product {
    _id: ID
    name: String
    description: String
    price: Int
    stock: Int
    image: String
  }
  type Mutation {
    createProduct(_id: ID , input: ProductInput): Product 
    createCategory(input: CategoryInput): Category
  
  }

  input ProductInput{
    name: String
    description: String
    price: Int
    stock: Int
    image: String
  }

  input CategoryInput{
    title: String
    products: [ID]
  }
  `

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
