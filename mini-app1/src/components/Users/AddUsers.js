import React from 'react';
import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }



    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" className="form-label">Add User</label>
                <input id="username" className="form-control" type="text" />

                <label id="age" htmlFor="number" className="form-label">Age</label>
                <input id="age" type="number" className="form-control" />

                
                <Button type="submit"> Add User </Button>
            </form>
        </Card>
    );
};

export default AddUser;