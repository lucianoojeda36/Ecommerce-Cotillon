import mongoose from 'mongoose';


export default async function connect() {
try{
    await mongoose.connect('mongodb://localhost:27017/cotillon')
    console.log('DATABASE IS CONECTED ON PORT 27017')
}
catch(err){
    console.log(err)
}
}
