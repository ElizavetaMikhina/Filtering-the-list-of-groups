import React from 'react'

interface User {
    first_name: string;
    last_name: string;
}

interface Props {
    friends: User[];
}

const FriendList: React.FC<Props> = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend, index) => (
                <li key={index}>
                    {friend.first_name} {friend.last_name}
                </li>
            ))}
        </ul>
    );
};

export default FriendList
