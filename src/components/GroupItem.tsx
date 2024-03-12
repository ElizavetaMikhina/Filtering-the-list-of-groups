import React, { useState } from 'react'
import FriendList from './FriendList';

interface Group {
	id: number;
	name: string;
	closed: boolean;
	avatar_color?: string;
	members_count: number;
	friends?: User[];
}

interface User {
	first_name: string;
	last_name: string;
}

interface Props {
	group: Group;
}

const GroupItem: React.FC<Props> = ({ group }) => {
    const [showFriends, setShowFriends] = useState(false);

    const toggleFriends = () => {
		setShowFriends(!showFriends);
    };
  
    return (
		<div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
			<h3>{group.name}</h3>
			{group.avatar_color && <div style={{ width: '100px', height: '100px', backgroundColor: group.avatar_color, borderRadius: '50%' }}></div>}
			<p>{group.closed ? 'Закрытая группа' : 'Открытая группа'}</p>
			<p>Подписчиков: {group.members_count}</p>
			{group.friends && <button onClick={toggleFriends}>Показать друзей ({group.friends.length})</button>}
			{showFriends && group.friends && <FriendList friends={group.friends} />}
		</div>
    );
  
}

export default GroupItem
