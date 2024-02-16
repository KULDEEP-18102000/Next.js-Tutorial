import { MongoClient,ObjectId } from "mongodb";

async function handler(req,res){
    try {
        if(req.method=='DELETE'){
            const url1='mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority'
            const url2="mongodb://0.0.0.0:27017/mailBox_backend_db"
            const client = await MongoClient.connect(url1)
            const db=client.db()
    
            const todosCollection= db.collection('todos')
    
            //deleting the todo from collection
            const result=await todosCollection.findOneAndDelete({_id:new ObjectId(req.body.id)})
            // console.log(result)
    
            client.close()
    
            res.status(201).json(result)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export default handler