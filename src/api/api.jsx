// Импортируем библиотеку axios для работы с HTTP-запросами
import axios from "axios";  

// Устанавливаем базовый URL для API
const BASEURL = 'https://650097b818c34dee0cd528db.mockapi.io/api/car_sharing';


// Функция для получения всех авто
export const allCars = async () => {

	// Выполняем GET-запрос на URL `${BASEURL}/catalog` с помощью axios и получаем данные
	const { data } = await axios.get(`${BASEURL}/catalog`);
	// Возвращаем полученные данные
	return data;
};


// Функция для добавления авто в избраное
export const addCarsToFavorite = async (id) => {

	// Выполняем POST-запрос на URL `${BASEURL}/catalog` с переданным авто и получаем данные
	const { data } = await axios.post(`${BASEURL}/favorite`, id);
	// Возвращаем полученные данные
	return data;
};

// Функция для удаления авто
export const delCarsFromFavorite = async id => {

	// Выполняем DELETE-запрос на URL `${BASEURL}/catalog/${id}` с указанным идентификатором авто и получаем данные
	const { data } = await axios.delete(`${BASEURL}/favorite/${id}`);

	// Возвращаем полученные данные
	return data;
}