import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// const a = async () => {
// 	const res = await fetch(`https://front-test.dev.aviasales.ru/search`);
// 	const data = await res.json();
// 	console.log(data);
// 	return data;
// };

// a(); // 13.12 ошибка 502 | Тестовый запрос
