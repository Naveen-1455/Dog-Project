function fetchdata(){
fetch('https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc')
.then( (apidata) => {
	//console.log(apidata);
	return apidata.json();
})
.then( (actualdata) => {
	console.log(actualdata);
	//console.log(actualdata[0].breeds[0].name);
	//console.log(actualdata[0].breeds[0].temperament);
	//console.log(actualdata[0].breeds[0].life_span);
	//console.log(actualdata[0].breeds[0].bred_for);
	//console.log(actualdata[0].breeds[0].breed_group);

	//const mydata = actualdata[0].breeds[0];

	
	for(var i=0;i<10;i++){
		const mydata = actualdata[i].breeds[i];
		const img = actualdata[i];
		let imgs = document.getElementById('image');
		imgs.src = `${img.url}`;
		document.getElementById('name').innerHTML = `Dog Name : ${mydata.name}`;
		document.getElementById('temperament').innerHTML = `Dog Temperament : ${mydata.temperament}`;
		document.getElementById('breed').innerHTML = `Dog Breed : ${mydata.bred_for}`;
		document.getElementById('life').innerHTML = `Dog Life Span : ${mydata.life_span}`;
		document.getElementById('group').innerHTML = `Dog Breed Group : ${mydata.breed_group}`;
	}

})
.catch( (error) => {
	console.log(error);
} );
}


fetchdata();