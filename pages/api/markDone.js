import { MongoClient,ObjectId } from "mongodb";

async function handler(req,res){
    try {
        if(req.method=='POST'){
            const data=req.body

            const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const todosCollection= db.collection('todos')

            //changing the todo status
            const result = await todosCollection.updateOne({_id: new ObjectId(req.body.id)}, { $set: {markAsDone:true} })
    
            // const result=await todosCollection.insertOne(data)
            console.log(result)
    
            client.close()
    
            res.status(201).json({message:"Todo Successfully mark as done"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export default handler