import { MongoClient,ObjectId } from "mongodb";

const handler=async(req,res)=>{
    try {
        if(req.method=='POST'){
            const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const meetupsCollection= db.collection('meetups')

            // const Id=new ObjectId(req.body.meetupId)
            console.log("requst-body",req.body)
    
            const result=await meetupsCollection.findOne({meetupID:req.body.meetupId})
            console.log("result----------------------5----")
            console.log(result)
    
            client.close()
    
            res.status(201).json(result)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export default handler