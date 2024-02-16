
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from "../../components/TodoList";
import NavBar from "../../components/NavBar";
import axios from "axios";


const CompletedTaskPage=(props)=>{

    return(
        <>
        <Container>
          {/* <NavBar/> */}

      <Row style={{margin:'5px'}}>
        <Col>
        <TodoList todos={props.todos}/>
        {/* <TodoList/> */}
        </Col>
    </Row>
    </Container>
        </>
    )
}


export async function getStaticProps(){
    const response=await axios.get('http://localhost:3000/api/getCompletedTodos')
    console.log(response)
  
    return{
        props:{
            todos:response.data
        },
        revalidate:1
    }
  }

export default CompletedTaskPage