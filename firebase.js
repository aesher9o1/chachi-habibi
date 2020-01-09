// Initialize Firebase
var config = {
  //PASTE HERE YOUR CODE
  apiKey: "AIzaSyD3P95xeEdKf5y_fdsZYH7Yp-WvCZXyF74",
authDomain: "website-19-b35f9.firebaseapp.com",
databaseURL: "https://website-19-b35f9.firebaseio.com",
projectId: "website-19-b35f9",
storageBucket: "website-19-b35f9.appspot.com",
messagingSenderId: "619183711546",
appId: "1:619183711546:web:432d183838b36e41589c03",
measurementId: "G-R2FX5L4ZBW"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get Values
  let name = getInputVal('name');
  let company = getInputVal('company');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let website = getInputVal('site');
  let message = getInputVal('message');
  let service = getInputVal('services');
  //let dope=getCheck('text1');
  //let check=getCheck('text2');
  //save message

  saveMessage(name, company, email, phone, message, website, service);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 s
  setTimeout(function(){
      document.querySelector('.alert').style.display='none';
  }, 5000)
  //clear form
  document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

function getCheck(id)
{
  if (document.getElementById(id).checked == true)
  {
  return document.getElementById(id).value;
  }
  else
  {
    return "2";
  }
}

//save message to firebase
function saveMessage(name, company, email, phone, message,website,service){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
      website: website,
      service: service
  })
}