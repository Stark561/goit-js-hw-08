// import '../css/common.css';
// import '../css/03-feedback.css';

function saveToLs (key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
}

function loadFromLS(key){
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
}

const refs = {
    formElem: document.querySelector('.feedback-form'),
};



refs.formElem.addEventListener('submit', e => {
    e.preventDefault()

    if(refs.formElem.email.value == '' || refs.formElem.message.value == ''){
        alert ('Заполните пожалуйста форму')
    };

    console.log(formData);

    formData = {};
    localStorage.removeItem('formData');

    refs.formElem.reset();
});

refs.formElem.addEventListener('input', e => {
    const value = e.target.value;
    const key = e.target.name;

    formData[key] = value;
    saveToLs('formData', formData);
});

let formData = loadFromLS('formData') || {};
refs.formElem.email.value = formData?.email || '';
refs.formElem.message.value = formData?.message || '';