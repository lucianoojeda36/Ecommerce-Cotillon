import Products from '../../models/Products'
import Categories from '../../models/Categories'
import mongoose from 'mongoose';


const resolvers = {
    Query: {
        hello: () => {
            return "hello worldsdfssd"
        },
        products: async () => {
            const data = await Products.find()
            return data
        },
        categories: async () => {
            const data = await Categories.find()
            return data
        },
        async findCategory(_: any, { _id }: any) {
            try {
                const category = await Categories.findById(_id).populate('products')
                return category
            }
            catch (err) {
                console.log(err)
            }
        },
    },
    Mutation: {

        async createProduct(_: any, { _id, input }: any) {

            const product = new Products({
                _id: new mongoose.Types.ObjectId(),
                name: input.name,
                description: input.description,
                price: input.price,
                stock: input.stock,
                image: input.image,
            })
            await product.save()

            const Ids = []

            Ids.push(product._id)

            await Categories.findByIdAndUpdate(_id, {
                $push: {
                    products:
                    {
                        $each: Ids
                    }
                }
            }, { new: true })


        },

        async createCategory(_: any, { input }: any) {
            const newCategory = new Categories(input)
            await newCategory.save()

            return newCategory
        }
    }
}

export default resolvers;