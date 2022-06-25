let cl= console.log;
const info = document.getElementById('info');

let data = [ 
 {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title:  "qui est esse",
    body:  "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis   voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];

//to convert javascript Object into JSON data >> JSON.stringify()

// let jsonsData = JSON.stringify(data);

// console.log(jsonsData);
// console.table(data);

// to store data in localStorage/sessionStorege we use >> .setItem();

// localStorage.setItem('setDate',jsonsData);

// to get data form localStorage/sessionStorege we us >> .getItem();

let getData = localStorage.getItem('setDate');

// let getData = JSON.parse(localStorage.getItem('setDate'));


cl(getData);
let getJsData = JSON.parse(getData);
cl(getJsData);


let result ='';
getJsData.forEach((ele, i) => {
	result +=`
			<tr>
				<td>${i + 1}</td>
				<td>${ele.id}</td>
				<td>${ele.userId}</td>
				<td>${ele.title}</td>
				<td>${ele.body}</td>
			</tr> 
	`
});

info.innerHTML = result;

let person = {
	name :'Rahul',
	email :'joshir16@gmail.com',
	canDriv : false
}
// sessionStorage.setItem('savePerson',person);

sessionStorage.setItem('savePerson',JSON.stringify(person));

// let getPerson = sessionStorage.getItem('savePerson');

let getPerson = JSON.parse(sessionStorage.getItem('savePerson'));
cl(getPerson);

// can not store javascript Object in localStorage/sessionStorage .


const pdata = document.getElementById('data');

pdata.innerHTML = getPerson.name;