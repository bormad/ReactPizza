import './scss/app.scss';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import pizzas from './assets/pizzas.json';

console.log(pizzas);

export const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{pizzas.map(obj => {
							return <Pizza {...obj} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
