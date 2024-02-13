import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";
import axios from "axios";


const MeetupDetailsPage=(props)=>{
    // const router=useRouter()
    // const {meetupId}=router.query
    // console.log(meetupId)

    console.log(props)

    return(
        <>
        <MeetupDetails meetup={props.meetup}/>
        </>
    )
}

export async function getStaticPaths(){
    return{
        fallback:true,
        paths:[
            {
                params:{
                    meetupId:'',
                },
            },
            // {
            //     params:{
            //         meetupId:'m2',
            //     },
            // },
            // {
            //     params:{
            //         meetupId:'m3',
            //     },
            // }
        ]
    }
}

export async function getStaticProps(context){

    const meetupId=context.params.meetupId

    console.log("meetupId",meetupId)

    // const response=await axios.get(`http://localhost:3000/api/get-meetup`,{meetupId:meetupId})
    // console.log(response)

    const response=await fetch('http://localhost:3000/api/get-meetup',{
        method:'POST',
        body:JSON.stringify({meetupId:meetupId}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await response.json()

    console.log("data--------------",data)

    return{
        props:{
            meetup:data
        }
    }
}

export default MeetupDetailsPage