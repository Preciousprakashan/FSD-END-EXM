import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { basicData } = location.state || {};
    
  
    const [todo, setTodo] = useState(basicData || {
        todo: '',
        status: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...data, [name]: value });
    };

    const handleSubmit = () => {

        axios.put(`http://localhost:4002/edit/${data._id}`, data)
            .then(() => {
                console.log('Data updated successfully');
                navigate('/');
            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };

    return (
        <>
            <Card sx={{ width: '100%', backgroundColor: '#ffffff', color: 'white' }}>
                <CardContent>
                    <h2>Edit Course</h2>
                    <Box>
                        {/* Course input fields */}
                        <TextField
                            onChange={handleChange}
                            name="data"
                            label="data"
                            value={data.data || ''}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            onChange={handleChange}
                            name="status"
                            value={data.status || ''}
                            label="status"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Update Data
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default Edit;
