import Link from "next/link"

const developer_arr=[
    { id : 1, name: 'Yash', role: 'Senior Developer'},
{ id : 2, name: 'Vaibhav', role: 'Backend Developer'},
{ id : 3, name: 'Suresh', role: 'Frontend Developer'}
]

const AboutPage=()=>{

    return(
        <>
        <h1>Welcome to About Page</h1>
        <ul>
            {developer_arr.map((d)=>(
                <li><Link href={`/aboutus/${d.id}`}>{d.name}</Link></li>
            ))}
        </ul>
        </>
    )
}

export default AboutPage