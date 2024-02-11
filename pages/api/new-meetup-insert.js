import { Collection, MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method=='POST'){
        try {
            const data=req.body

            const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const meetupsCollection= db.collection('meetups')
    
            const result=await meetupsCollection.insertOne(data)
            console.log(result)
    
            client.close()
    
            res.status(201).json({message:"Meetup Successfully Inserted"})
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
       
    }
}

export default handler