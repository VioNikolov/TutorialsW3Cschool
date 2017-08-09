/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		var titles = [];
		var isbns = [];
		function listBooks(obj) {
			if (!!obj) {
				var result = books.filter(x => x.category === obj.category);
				return result;
			}
			
			
			return books;
		}

		function addBook(book) {
			book.ID = books.length + 1;
			
			if (book.title.length < 2 || book.title.length > 100) {
				throw new Error ('Book title length is invalid.');
			}

			if (book.author === '') {
				throw new Error ('Book author is empty.')
			}

			if (titles.indexOf(book.title) !== -1) {
				throw new Error ('Already title with the same name.')
			}

			if (isbns.indexOf(book.isbn) !== -1) {
				throw new Error ('Already isbn with the same name.')
			}

			if (book.isbn.length < 10 || book.isbn.length > 13) {
				throw new Error ('Book isbn length is invalid.');
			}


			if (categories.indexOf(book.category) === -1) {
				categories.push(book.category);
			}
	
			isbns.push(book.isbn);
			titles.push(book.title);
			books.push(book);
			return book;
		}

		function listCategories() {
			
			return categories;
			
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;