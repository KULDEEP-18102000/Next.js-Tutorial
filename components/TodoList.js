import ListGroup from 'react-bootstrap/ListGroup';
import { MdDelete } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TodoList=(props)=>{

    console.log(props)

    //Editing the todo status
    const markAsDoneHandler=async(id)=>{
        console.log(id)
        const response=await fetch('/api/markDone',{
            method:'POST',
            body:JSON.stringify({id:id}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        props.removeTodo(id)
        console.log(data)
    }

    //removing todo from list
    const deleteTodoHandler=async(id)=>{
        console.log(id)
        const response=await fetch('/api/deleteTodo',{
            method:'DELETE',
            body:JSON.stringify({id:id}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        props.removeTodo(id)
        console.log(data)
    }

    return(
        <>
         <ListGroup>
            {props.todos.map((todo)=>(
                <ListGroup.Item key={todo?._id?.toString()}>
                    <Container>
                        <Row>
                        <Col>
                        {todo?.markAsDone==false && <input type="radio" id="html" name="fav_language" onChange={()=>{markAsDoneHandler(todo._id)}}></input>}
                        </Col>
                        <Col>
                        {todo?.description}
                        </Col>
                        <Col>
                        <MdDelete style={{cursor:'pointer'}} onClick={()=>{deleteTodoHandler(todo._id)}}/>
                        </Col>
                        </Row>
                    
                    
                    
                    </Container>
                </ListGroup.Item>
            ))}
    </ListGroup>
        </>
    )
}

export default TodoList