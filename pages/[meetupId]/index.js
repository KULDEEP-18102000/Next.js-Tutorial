import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";



const MeetupDetailsPage=(props)=>{
    // const router=useRouter()
    // const {meetupId}=router.query
    // console.log(meetupId)

    console.log(props)

    return(
        <>
        <MeetupDetails id={props.meetupId}/>
        </>
    )
}

export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                },
            },
            {
                params:{
                    meetupId:'m2',
                },
            },
            {
                params:{
                    meetupId:'m3',
                },
            }
        ]
    }
}

export async function getStaticProps(context){

    const meetupId=context.params.meetupId

    return{
        props:{
            meetupId:meetupId
        }
    }
}

export default MeetupDetailsPage