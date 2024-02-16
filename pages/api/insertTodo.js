import { MongoClient } from "mongodb";

async function handler(req,res){
    try {
        if(req.method=='POST'){
            const data=req.body

            const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const todosCollection= db.collection('todos')
    
            const result=await todosCollection.insertOne(data)
            console.log(result)
    
            client.close()
    
            res.status(201).json({message:"Todo Successfully Inserted"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export default handler