const adminUsername = document.querySelector('#inputAdminUsername');
const adminPassword =  document.querySelector('#inputAdminPassword');
const loginBtn = document.querySelector('#btnAdminLogin');
const clearBtn = document.querySelector('#btnClear');
const alertController = document.querySelector('ion-alert-controller');

const clear = () => {
adminUsername.value = '';
adminPassword.value = '';
};

loginBtn.addEventListener('click', ()=> {
    
    const enteredUsername = adminUsername.value;
    const enteredPassword = adminPassword.value;

    if(enteredUsername.trim().length <=0 || enteredPassword.trim().length <=0 ) {
      
       alertController.create({
           message:'Please enter username and password',
           header: 'Invalid inputs',
           buttons: ['OK']  
    }).then(alertElement =>{
        alertElement.present();
    });
        return;
    }
    console.log(enteredUsername,enteredPassword);
});

clearBtn.addEventListener('click', clear);