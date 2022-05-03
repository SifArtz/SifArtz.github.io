document.addEventListener("DOMContentLoaded", () => {

    const firstName = document.querySelector("#InputFirstName");
    const surName = document.querySelector("#InputSurName");
    const login = document.querySelector("#InputLogin");
    const password = document.querySelector("#InputPassword");
    const passwordRepeat = document.querySelector("#InputPasswordRepeat");
    const tel = document.querySelector("#InputTel");
    const email = document.querySelector("#InputEmail");
    const radio = document.querySelector("#_12");
    const registrationButton = document.querySelector('.registration__button');


    //проверка, что поля не пустые при нажатии кнопки Зарегистрироваться
    registrationButton.addEventListener("click", checkValueMissing);

    let errors = [];

    function checkValidity(input) {
        let validity = input.validity;
        //записываем в переменную input.validity (нашего инпута, который пришел, как параметр)
        if (validity.valueMissing) {
            errors.push('Поле "' + input.placeholder + '" не заполнено');
        }
    }

    function checkValueMissing() {
        errors = [];
        let inputs = document.querySelectorAll("input");
        for (let input of inputs) {
            checkValidity(input);
        }
        document.querySelector('.errorsInfo').innerHTML = errors.join('. <br>');
    }


    //проверки при вводе в соответствующие поля формы

    //поле Имя
    firstName.addEventListener("input", ValidatefirstName);

    function ValidatefirstName() {
        const firstNameFormat = /\d/;
        
        
        if (firstName.value.match(firstNameFormat)) {
            document.querySelector('#errowMessageFirstName')
                .innerHTML = '<div style="padding-bottom: 25px;">Имя не может содержать цифры</div>';
        } 
        if  (firstName.value.length < 3) 
        {
            document.querySelector('#errowMessageFirstName')
                .innerHTML = '<div style="padding-bottom: 25px;">Имя должно содержать больше 3 символов</div>';
        }
        
        
        else 
        {
            document.querySelector('#errowMessageFirstName').innerHTML = "";
        }
    }

    //поле Фамилия
    surName.addEventListener("input", ValidatesurName);

    function ValidatesurName() {
        const surNameFormat = /\d/;
        if (surName.value.match(surNameFormat)) {
            document.querySelector('#errowMessageSurName')
                .innerHTML = '<div style="padding-bottom: 25px;">Фамилия не может содержать цифры</div>';
            
        } else {
            document.querySelector('#errowMessageSurName').innerHTML = "";
        }
    }

    //поле Логин
    login.addEventListener("input", Validatelogin);

    function Validatelogin() {
        const loginFormat = /^[a-zA-Z1-9]+$/;
        if (login.value.match(loginFormat)) {
            document.querySelector('#errowMessagelogin').innerHTML = "";
        } else {
            document.querySelector('#errowMessagelogin')
                .innerHTML = '<div style="padding-bottom: 25px;">Логин может состоять только из латинских букв и цифр</div>';
            
        }
    }

    //поле Пароль
    password.addEventListener("input", Validatepassword);

    function Validatepassword() {
        const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (password.value.match(passwordFormat)) {
            document.querySelector('#errowMessagePassword').innerHTML = "";
        } else {
            document.querySelector('#errowMessagePassword')
                .innerHTML =  '<div style="padding-bottom: 25px;">Пароль не надежный. Должен содержать от от 8 до 15 символов, как минимум одну строчную букву, одну заглавную букву, одну цифровую цифру и один специальный символ</div>';
           
            
        }
    }

    //поле Повторите пароль
    passwordRepeat.addEventListener("input", ValidatepasswordRepeat);

    function ValidatepasswordRepeat() {
        if (passwordRepeat.value != password.value) {
            document.querySelector('#errowMessagePasswordRepeat')
                .innerHTML = '<div style="padding-bottom: 25px;">Пароли не совпадают</div>';
            return false;
        } else {
            document.querySelector('#errowMessagePasswordRepeat').innerHTML = "";
        }
    }

    //поле Телефон
    tel.addEventListener("input", Validatetel);

    function Validatetel() {
        const telFormat = /^\d[\d\(\)\ -]{9}\d$/;
        if (tel.value.match(telFormat)) {
            document.querySelector('#errowMessageTel').innerHTML = "";
        } else {
            document.querySelector('#errowMessageTel')
                .innerHTML = '<div style="padding-bottom: 25px;">Недопустимый формат номера</div>';
        }
    }

     //поле Email
    email.addEventListener("input", ValidateEmail);

    function ValidateEmail() {
        const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email.value.match(emailFormat)) {
            document.querySelector('#errowMessageEmail').innerHTML = "";
        } else {
            document.querySelector('#errowMessageEmail')
                .innerHTML = '<div style="padding-bottom: 25px;">Недопустимый формат почты</div>';
        }
    }
    
    

    
    //проверка пользовательского соглашения
    const userAgreement = document.querySelector("#userAgreement");
    userAgreement.addEventListener("click", signCheck);

    function signCheck() {
        if (userAgreement.checked) {
            registrationButton.disabled = false;
        } else {
            registrationButton.disabled = true;
        }
    }
    
  
})