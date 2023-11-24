// Firebase authentication logic (or any other authentication logic) can be implemented here
document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            //
            const user = userCredential.user;
            console.log('User logged in:', user);
           
        })
        .catch((error) => {
          
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login Error:', errorMessage);
            
        });
});
