import React, { useEffect, useState } from 'react';
import GroupFilters from './components/GroupFilters';
import GroupList from './components/GroupList';

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

function App() {
    const [groups, setGroups] = useState<Group[]>([]);
    const [filters, setFilters] = useState<Filters>({
        privacy: 'all',
        color: 'any',
        friends: false
    });
  
    const fetchGroups = () => {
        const groupsData: Group[] = require('../groups.json');
        setTimeout(() => {
            setGroups(groupsData);
        }, 1000);
    };

    useEffect(() => {
        fetchGroups();
    }, []);
  
    const updateFilters = (newFilters: Filters) => {
        setFilters(newFilters);
    };
  
    return (
        <div>
            <h1>Список групп</h1>
            <GroupFilters filters={filters} updateFilters={updateFilters} />
            <GroupList groups={groups} filters={filters} />
        </div>
    );
  
}

export default App