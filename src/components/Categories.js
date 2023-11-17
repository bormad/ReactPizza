import React from 'react';

const categories = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
];

export default function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, i) => {
					return (
						<li
							onClick={() => setActiveIndex(i)}
							className={activeIndex === i ? 'active' : ''}
							key={category}
						>
							{category}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
