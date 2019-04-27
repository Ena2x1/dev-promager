const courseName = document.querySelector('#inputCourseName');
const courseRating =  document.querySelector('#inputCourseRating');
const addButton  =  document.querySelector('#btnAdd');
const courseList =  document.querySelector('#courseList');
const alertCtrl = document.querySelector('ion-alert-controller'); 

 addButton.addEventListener('click',() => {
    const enteredCourseName = courseName.value;
    const enteredCourseRating = courseRating.value;

    if(enteredCourseName.trim().length <=0 ||
     enteredCourseRating.trim().length <=0 || 
    enteredCourseRating <1 ||
    enteredCourseRating>5 
    ){
        alertCtrl.create({
            header: 'Invalid Input', 
            message:'Please enter a valid course name and rating',
            buttons: ['OK']
        }).then(alertEl => alertEl.present());
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredCourseRating}/5`;

    courseList.appendChild(newItem);

    courseName.value = '';
    courseRating.value = '';

 });