import React from 'react';

interface Filters {
	privacy: string;
	color: string;
	friends: boolean;
}

interface Props {
	filters: Filters;
	updateFilters: (newFilters: Filters) => void;
}

const GroupFilters: React.FC<Props> = ({ filters, updateFilters }) => {
	const handlePrivacyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		updateFilters({ ...filters, privacy: event.target.value });
	};
  
	const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		updateFilters({ ...filters, color: event.target.value });
	};
  
	const handleFriendsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateFilters({ ...filters, friends: event.target.checked });
	};
  
	return (
		<div>
			<label>
				Тип приватности:
					<select value={filters.privacy} onChange={handlePrivacyChange}>
						<option value="all">Все</option>
						<option value="open">Открытые</option>
						<option value="closed">Закрытые</option>
					</select>
			</label>
			<label>
				Цвет аватарки:
					<select value={filters.color} onChange={handleColorChange}>
						<option value="any">Любой</option>
						<option value="red">Красный</option>
						<option value="green">Зеленый</option>
						<option value="yellow">Желтый</option>
						<option value="blue">Синий</option>
						<option value="purple">Фиолетовый</option>
						<option value="white">Белый</option>
						<option value="orange">Оранжевый</option>
					</select>
			</label>
			<label>
				<input type="checkbox" checked={filters.friends} onChange={handleFriendsChange} />
				С друзьями
			</label>
		</div>
	);
};

export default GroupFilters
