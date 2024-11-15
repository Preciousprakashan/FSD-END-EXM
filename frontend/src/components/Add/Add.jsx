import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Addtodo = () => {
    const navigate = useNavigate();

    const [todo, setTodo] = useState({
        tododata: '',
        todostatus: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCourse({ ...todo, [name]: value }); 
  };
  

    const handleSubmit = () => {

        axios.post('http://localhost:4002/add', todo) 
            .then(() => {
                console.log('Course added successfully');
                navigate('/')
                setTimeout(() => {
                    alert('Todo added successfully');
                }, 100); 
            })
            .catch((error) => {
                console.error('Error adding course:', error);
            });
    };

    return (
        <>
            <Card sx={{ width: '100%', backgroundColor: '#ffffff', color: 'white' }}>
                <CardContent>
                    <h2>Add New TODO</h2>
                    <Box>
                        {/* Course input fields */}
                        <TextField
                            onChange={handleChange}
                            name="tododata"
                            label="tododata"
                            value={todo.todoname}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            onChange={handleChange}
                            name="todostatus"
                            value={todo.todostatus}
                            label="Todo Status"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Add
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default Addtodo;
