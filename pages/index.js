import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout"

const dummy_meetups=[
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
        address:'some address 5,12345 some city',
        description:'This is a first meetup'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
        address:'some address 10,12345 some city',
        description:'This is a second meetup'
    }
]

const HomePage=()=>{

    return(
        <>
        <h1>Welcome to HomePage</h1>
        <MeetupList meetups={dummy_meetups}/>
        </>
    )
}

export default HomePage