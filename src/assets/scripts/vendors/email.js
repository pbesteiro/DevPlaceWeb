const emailTemplates = {
  bankTransfer: 'send_bank_transfer_email',
  bootcamp: 'send_bootcamp_email',
  companyContactUs: 'send_company_contact_us_email',
  contactUs: 'send_contact_us_email',
  hirePlan: 'send_hire_plan_email',
  lead: 'send_lead_email',
  leadGiftCard: 'send_lead_giftcard_email',
  partnership: 'send_become_partner_email',
  workWithUs: 'send_work_with_us_email',
  giftCard: 'send_giftcard_email'
}

const showLoading = (form) => {
  const body = document.getElementsByTagName('body');
  body[0].classList.toggle("loading");

  const button = form.querySelectorAll('[type="submit"]')[0];
  button.disabled = true;
  button.classList.add('loading')
}

const hideLoading = (form) => {
  const body = document.getElementsByTagName('body');
  body[0].classList.toggle("loading");

  const button = form.querySelectorAll('[type="submit"]')[0];
  button.disabled = false;
  button.classList.remove('loading')
}

const sendEmail = (template, form, formData, callback) => {
  const sendEmailUrl = `${window.location.protocol}//${window.location.host}/helpers/${emailTemplates[template]}.php`
  
  if(!!form){
    showLoading(form)
  }

  fetch( sendEmailUrl, {
    body: formData ,
    method: "post"
  }).then((response) => {
    return response.text();
  }).then((response) => {
    // showToast('form-sended-toast')
    if(!!callback){
      callback(response)
    }
  }).catch((error) => {
    console.warn(error);
  }).finally(() => {
    if(!!form){
      hideLoading(form)
    }
  });
}