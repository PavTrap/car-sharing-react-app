// Импортируем библиотеку axios для работы с HTTP-запросами
import axios from "axios";  

// Устанавливаем базовый URL для API
const BASEURL = 'https://650097b818c34dee0cd528db.mockapi.io/api/car_sharing';

//"https://project_token.mockapi.io/users/1/tasks?completed=false&page=1&limit=10"

// Функция для получения всех авто
export const allCars = async (page, limit) => {

	// Выполняем GET-запрос на URL `${BASEURL}/catalog` с помощью axios и получаем данные
	const { data } = await axios.get(`${BASEURL}/catalog?page=${page}&limit=${limit}`);
	// Возвращаем полученные данные
	return data;
};


// Функция для добавления и удаления авто в избраное
export const addCarsToFavorite = async (id, value) => {

	// Выполняем put-запрос на URL `${BASEURL}/catalog` с переданным авто и получаем данные
	const { data } = await axios.put(`${BASEURL}/catalog/${id}`, {favorite: value});
	// Возвращаем полученные данные
	return data;
};


// Функция для получения всех авто
export const getFavorites = async (page, limit) => {

	// Выполняем GET-запрос на URL `${BASEURL}/catalog` с помощью axios и получаем данные
	const { data } = await axios.get(`${BASEURL}/catalog?favorite=true&page=${page}&limit=${limit}`);
	// Возвращаем полученные данные
	return data;
};

