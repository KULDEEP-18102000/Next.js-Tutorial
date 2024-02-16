import TodoForm from "../../components/TodoForm"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from "../../components/TodoList";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { useState,useEffect } from "react";


const TodoPage=(props)=>{

  const [todos,setTodos]=useState([])

  useEffect(()=>{
    setTodos(props.todos)
  },[])

  const removeTodo=(id)=>{
    console.log("came to remove todo")
    const filteredTodos=todos.filter((todo)=>{
      return todo._id!=id
    })
    setTodos(filteredTodos)
  }

  const AddTodo=(todo)=>{
    console.log("add todo")
    const updatedTodos=todos.concat(todo)
    setTodos(updatedTodos)
  }

    return(
        <>
        <Container>
          {/* <NavBar/> */}
      <Row>
        <Col><TodoForm AddTodo={AddTodo}/></Col>
      </Row>

      <Row style={{margin:'5px'}}>
        <Col>
        <TodoList todos={todos} removeTodo={removeTodo}/>
        {/* <TodoList/> */}
        </Col>
    </Row>
    </Container>
        </>
    )
}

// export async function getServerSideProps(context){

//     // const req=context.req
//     // const res=context.res

//     const response=await axios.get('http://localhost:3000/api/getTodos')
//   console.log(response)

//     return{
//       props:{
//         todos:response.data
//     }
//     }
// }


export async function getStaticProps(){
  const response=await axios.get('http://localhost:3000/api/getTodos')
  // console.log(response)

  return{
      props:{
          todos:response.data
      },
      revalidate:1
  }
}


export default TodoPage