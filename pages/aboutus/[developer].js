import { useRouter } from 'next/router';

const developer_arr=[
    { id : 1, name: 'Yash', role: 'Senior Developer'},
{ id : 2, name: 'Vaibhav', role: 'Backend Developer'},
{ id : 3, name: 'Suresh', role: 'Frontend Developer'}
]


const DeveloperPage=()=>{

    const router=useRouter()
    const {developer}=router.query
    console.log(developer)

    const developer_information=developer_arr.find((d)=>{return d.id==developer})
    console.log(developer_information)

    return(
        <>
        {developer_information!==undefined && <h1>{developer_information?.name} {developer_information?.role}</h1>}
        {developer_information==undefined && <h1>User Not Found</h1>}
        </>
    )
}

export default DeveloperPage