import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Jimcool',
            image: 'https://miro.medium.com/max/1280/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
            places: 3
        },
        {
            id: 'u2',
            name: 'Enock',
            image: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
            places: 1
        },
    ]

    return (
        <UsersList items={USERS} />
    )
}

export default Users;
