function onClickProceed() {
    document.write("I am Roshna Rose Raju (301174285) enrolled in Software Engineering technology Fastrack program. I am from India.");
   let img = document.createElement('img');
   img.src = "./Photo.jpg";
   document.getElementById('body').appendChild(img);  
  // document.getElementById("y").src="./Photo.jpg" 
}

function onClickCancel() {
    alert("Thank You. Have a great day...!!!");
}