import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";
import axios from "axios";
import { MongoClient,ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";


const MeetupDetailsPage=(props)=>{
    // const router=useRouter()
    // const {meetupId}=router.query
    // console.log(meetupId)

    console.log(props)

    return(
        <>
        <Fragment>
        <Head>
                <title>{props.meetup.title}</title>
                <meta
                name="description"
                content={props.meetup.description}
                />
            </Head>
            <MeetupDetails meetup={props.meetup}/>
        </Fragment>
        </>
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const meetupsCollection= db.collection('meetups')
    
            const meetups=await meetupsCollection.find({},{_id:1}).toArray()
            console.log(meetups)
    
            client.close()
    return{
        fallback:true,
        paths:meetups.map((meetup)=>({
            params:{
                meetupId:meetup._id.toString()
            },
        }))
        // paths:[
        //     {
        //         params:{
        //             meetupId:'',
        //         },
        //     },
        //     // {
        //     //     params:{
        //     //         meetupId:'m2',
        //     //     },
        //     // },
        //     // {
        //     //     params:{
        //     //         meetupId:'m3',
        //     //     },
        //     // }
        // ]
    }
}

export async function getStaticProps(context){

    const meetupId=context.params.meetupId

    console.log("meetupId",meetupId)

    const client = await MongoClient.connect(`mongodb+srv://jadonkuldeepsingh2:kuldeepmailboxclient@cluster0.fsc5bdc.mongodb.net/?retryWrites=true&w=majority`)
            const db=client.db()
    
            const meetupsCollection= db.collection('meetups')
    
            const selectedMeetup=await meetupsCollection.findOne({
                _id:new ObjectId(meetupId)
            })
            console.log(selectedMeetup)
    
            client.close()

    // const response=await axios.get(`http://localhost:3000/api/get-meetup`,{meetupId:meetupId})
    // console.log(response)

    // const response=await fetch('http://localhost:3000/api/get-meetup',{
    //     method:'POST',
    //     body:JSON.stringify({meetupId:meetupId}),
    //     headers:{
    //         'Content-Type':'application/json'
    //     }
    // })
    // const data=await response.json()

    // console.log("data--------------",data)

    return{
        props:{
            // meetup:data
            meetup:{
                id:selectedMeetup._id.toString(),
                title:selectedMeetup.title,
                address:selectedMeetup.address,
                image:selectedMeetup.image,
                description:selectedMeetup.description
            }
        }
    }
}

export default MeetupDetailsPage