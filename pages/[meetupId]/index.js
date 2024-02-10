import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

const MeetupDetailsPage=()=>{
    const router=useRouter()
    const {meetupId}=router.query
    console.log(meetupId)

    return(
        <>
        <MeetupDetails id={meetupId}/>
        </>
    )
}

export default MeetupDetailsPage