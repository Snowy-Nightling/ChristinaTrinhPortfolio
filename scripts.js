// javascript for blog.html
/* original code without using the example from assignment document
const blogDiv = document.querySelector('.blogs');
const url = "http://localhost:8080/posts.json";

fetchBlogs();

async function fetchBlogs(){
	let data = await fetch(url);
	let blogs = await data.json();

	printBlogs(blogs)
}

function printBlogs(blogData){
	blogData.forEach(item =>{
		let blogEL = document.createElement('div');
		blogEL.classList.add('blog');

		blogEL.innerHTML = '
		<h2>${item.title}</h2>
		<p>${item.content}</p>
		<a href = "" >Read More ... </a>
		';

		blogDiv.appendChild(blogEl);	
	})
}
*/


//merged code with assignment code

document.addEventListener('DOMContentLoaded', function() {
	const blogList = document.getElementById('blog-list');

	fetch(data/posts.json')
	   .then(response => response.json())
	   .then(posts => {
		posts.forEach(post => {
		   const postElement = document.createElement('div');

		   // manipulate postElement to show the content of the blog post with the specific style defined for it
		   
		   postElement.classList.add('blog');

		   postElement.innerHTML = '
		   <h2>${item.title}</h2>
		   <p>${item.content}</p>
		   <a href = "" >Read More ... </a>
		   ';

		blogList.appendChild(postElement);
	   });
	})
   .catch(error => console.error('Error loading blog posts:', error));
});