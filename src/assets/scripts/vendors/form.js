
const paisField = document.getElementById("pais");

if(!!paisField){
  paisField.addEventListener('change', (event) => {
    var dialCode =
      event.currentTarget.options[event.target.selectedIndex].dataset.dialcode;
    document.getElementById("country-code").innerText = "+" + dialCode;
  });
}

const inputs = document.getElementsByTagName('input')
const selects = document.getElementsByTagName('select')
const textareas = document.getElementsByTagName('textarea')

if(!!inputs){
  for (const input of inputs) {
    input.addEventListener('keyup', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }

  for (const select of selects) {
    select.addEventListener('change', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }

  for (const textarea of textareas) {
    textarea.addEventListener('keyup', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }
}

const saveJsonInLocalStorage = (id, data) => {
  localStorage.setItem(
    id, 
    data
  );
}

const saveInLocalSoterage = (formId) => {
  const form = document.getElementById(formId)
  const formData = new FormData(form);
  let data = []

  
  for (var [key, value] of formData.entries()) { 
    const element = form.querySelector('[name="' + key + '"]');
    let type = 'other';

    if (element.tagName == "INPUT") {
      type = element.type
    }
  
    if (element.tagName == "SELECT") {
      type = 'select'
    }

    data.push({type, key, value});
  }

  localStorage.setItem(
    formId, 
    JSON.stringify(data)
  );
}

const fillWithLocalStorageInfo = (formId) => {
  const fields = JSON.parse(localStorage.getItem(formId))

  if(!!fields){
    fields.forEach(field => {
      const element = document.querySelectorAll('[name="' + field.key + '"]');
      
      for (const item of element) {
        if(field.type === 'checkbox' || field.type === 'radio'){
          item.checked = item.value === field.value 
        } else {
          item.value = field.value
        }
      }
    });
  }
}