const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
function search(str) {
	// TODO will trigger based on the event listener you created in the last step. This function will return a list called results. This function will filter the fruit list based on whatever user input is in the search box. If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters. That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list. 
	
	let results = [];
	results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
	return results;
}

function searchHandler(e) {
	// TODO check if the user has clicked on the input and highlight and start searching
	let inputVal = input.value.toLowerCase(); 
	let results = search(inputVal);
	showSuggestions(results, inputVal); //to initiate showing results when the person starts to input stuff
}

function showSuggestions(results, inputVal) {
	// TODO prints suggestion results array - suggestions will be if input.includes fruit = suggestions - shows in array results - takes in array results with a bunch of different suggestions inside //need indefinate number in array results that will each print to own ul
	suggestions.innerText = ""; //clear suggestions before inputs
	results.forEach(result => {
		const suggestion = document.createElement("li");
        suggestion.innerText = result;
		suggestions.appendChild(suggestion);
	});
}

function useSuggestion(e) {
	// TODO if user clicks on suggestion, it becomes current input uses suggestions event listener to find which is clicked 
	if (e.target.tagName === "LI") //if you click on a li suggestion
	{
		//set value as li value
		input.value = e.target.innerText;
		suggestions.innerText = ""; //clear suggestions when one is clicked 
	}
}

input.addEventListener('keyup', searchHandler); // key is pressed
suggestions.addEventListener('click', useSuggestion); // when user selects the input from ul list