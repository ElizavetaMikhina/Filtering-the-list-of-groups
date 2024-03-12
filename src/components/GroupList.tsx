import React from 'react'
import GroupItem from './GroupItem';

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

interface Filters {
    privacy: string;
    color: string;
    friends: boolean;
}

interface Props {
	groups: Group[];
	filters: Filters;
}

const GroupList: React.FC<Props> = ({ groups, filters }) => {
    const filteredGroups = groups.filter(group => {
        return (
			(filters.privacy === 'all' || group.closed === (filters.privacy === 'closed')) &&
			(filters.color === 'any' || (group.avatar_color && group.avatar_color === filters.color)) &&
			(!filters.friends || group.friends)
		);
	});
		
	return (
		<div>
			{filteredGroups.map(group => (
				<GroupItem key={group.id} group={group} />
			))}
		</div>
	);
}

export default GroupList
