import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useForm} from 'react-hook-form'

const Test = () => {


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };





    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '312px'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={10}
                        onChange={handleChange}
                        noValidate
                        variant="filled"
                        {...register('firstName', {
                            required: "Поле обязательно к заполнению",
                            maxLength: {
                                value: 20,
                                message: 'максимум 20 символов!'
                            }
                        })}
                    />
                    <div style={{height: 40}}>{errors?.firstName && <p className=''>{errors?.firstName?.message || "Error!"}</p>}</div>
                    <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        multiline
                        variant="filled"
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                    />
                </div>
            </Box>
            <button style={{height: 40, width: 130}}>submit</button>
        </form>
    );
};

export default Test;