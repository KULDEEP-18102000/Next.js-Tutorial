import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from "next/router"
import { Fragment } from "react"
import Head from "next/head"

const NewMeetupPage=()=>{
    const router=useRouter()

    async function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)

        const response=await fetch('/api/new-meetup-insert',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()

        console.log(data)

        router.push('/')
    }

    return (
        <>
        {/* <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                name="description"
                content="Browsw a hige list of react mertups"
                />
            </Head>
        <h1>Welcome to HomePage</h1>
        <MeetupList meetups={props.meetups}/>
        </Fragment> */}
        <Fragment>
        <Head>
                <title>Add React Meetup</title>
                <meta
                name="description"
                content="Add a meetup to huge list of react meetups"
                />
            </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
        
        </>
    )
}

export default NewMeetupPage