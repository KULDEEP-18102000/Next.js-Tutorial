import MeetupList from "../components/meetups/MeetupList"
import axios from "axios"

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
    },
    {
        id:'m3',
        title:'A Third Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
        address:'some address 15,12345 some city',
        description:'This is a Third meetup'
    }
]

const HomePage=(props)=>{

    // console.log(props)
    return(
        <>
        <h1>Welcome to HomePage</h1>
        <MeetupList meetups={props.meetups}/>
        </>
    )
}

// export async function getServerSideProps(context){

//     const req=context.req
//     const res=context.res

//     return{
//         props:{
//             meetups:dummy_meetups
//         }
//     }
// }

export async function getStaticProps(){
    const response=await axios.get('http://localhost:3000/api/get-meetups')
    console.log(response)

    // const response=await fetch('/api/get-meetups',{
    //     method:'GET',
        
    //     headers:{
    //         'Content-Type':'application/json'
    //     }
    // })
    // const data=await response.json()
    return{
        props:{
            meetups:response.data
        },
        revalidate:1
    }
}

export default HomePage