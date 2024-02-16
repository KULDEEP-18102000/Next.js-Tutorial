import { MongoClient } from "mongodb";

async function handler(req,res){
    try {
        if(req.method=='GET'){
            const url1='mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority'
            const url2="mongodb://0.0.0.0:27017/mailBox_backend_db"
            const client = await MongoClient.connect(url1)
            const db=client.db()
    
            const todosCollection= db.collection('todos')
    
            //getting all the completed tasks
            const result=await todosCollection.find({markAsDone:true}).toArray()
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