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
        data: '',
        status: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTodo({ ...todo, [name]: value }); 
  };
  

    const handleSubmit = () => {

        axios.post('http://localhost:4002/add', todo) 
            .then(() => {
                console.log('Data added successfully');
                navigate('/')
            })
            .catch((error) => {
                console.error('Error adding data:', error);
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
                            value={todo.data}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            onChange={handleChange}
                            name="todostatus"
                            value={todo.status}
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
