
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase, ref, set, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAnZSx2KAslY2ELF1Un88iQFIiZmH9zBYY",
   authDomain: "submission-form-f613e.firebaseapp.com",
   databaseURL: "https://submission-form-f613e-default-rtdb.firebaseio.com",
   projectId: "submission-form-f613e",
   storageBucket: "submission-form-f613e.appspot.com",
   messagingSenderId: "39312077409",
   appId: "1:39312077409:web:85384178958cad75c97020",
   measurementId: "G-NMW1YV3PJN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase(app);
 
 



window.submitDAta = function(){
 

   var name = document.getElementById('fname').value;
   var showname = document.getElementById('showname');
   var last = document.getElementById('lname').value;
   var showlast = document.getElementById('showlast');
   var Email = document.getElementById('Email').value;
   var showemail = document.getElementById('showemail');
   var password = document.getElementById('Password').value;
   var showpass = document.getElementById('showpass');
   var colification = document.getElementById('Colification').value;
   var showcolific = document.getElementById('showcolific');
   var course = document.getElementById('Course').value;
   var showcourse = document.getElementById('showcourse');

  showname.innerHTML = name
  showlast.innerHTML = last
  showemail.innerHTML = Email
  showpass.innerHTML = password
  showcolific.innerHTML = colification
  showcourse.innerHTML = course

  var userId = Math.random().toString().slice(2);
  var firstName= name;
  var lastName = last;
  var userEmail = Email
  var userPassword = password
  var userColification = colification
  var userCourse = course

  //  firebase.database().ref('name/' + userId).set()
   set(ref(database, 'form/' + userId), {
   firstName,
   lastName,
   userEmail,
   userPassword,
   userColification,
   userCourse,
   });
}

function getData(){
  const countData = ref(database, 'form');
  onValue(countData, (caldata) => {
  const data = caldata.val();
  console.log(data);
});
}
getData()


