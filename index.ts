const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type Fn = (URL: string) => Promise<{id: number; email:string}[]>

const getData: Fn = (url) => {
  // Your code here...

  const data = fetch(url).then(response => response.json())

	return data
}

getData(COMMENTS_URL)
  .then(data => {
    // Your code here...
	data.forEach(item => console.log(`ID: ${item.id}, Email: ${item.email}`))

  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */