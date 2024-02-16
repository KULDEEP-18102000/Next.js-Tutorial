import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

function TodoForm(props) {

    const nameRef=useRef()
    const descriptionRef=useRef()

    const AddTodo=async(e)=>{
        e.preventDefault()
        const enteredTodo={
            name:nameRef.current.value,
            description:descriptionRef.current.value,
            markAsDone:false
        }
        console.log(enteredTodo)
        const response=await fetch('/api/insertTodo',{
            method:'POST',
            body:JSON.stringify(enteredTodo),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        console.log(data)
        props.AddTodo(enteredTodo)
        nameRef.current.value=''
        descriptionRef.current.value=''
    }

  return (
    <Form onSubmit={AddTodo}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="name" ref={nameRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="description" ref={descriptionRef}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TodoForm;