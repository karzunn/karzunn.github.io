let accessToken = {"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjREVjZzVkxIM0FtU1JTbUZqMk04Wm5wWHU3WSJ9.eyJuYW1laWQiOiI3YjhiYTcwZC0yNzhiLTRkOWQtYWI3ZS1mM2VhNWYyMDM2NDUiLCJhcHBsaWNhdGlvbmlkIjoiMGE3NmIxMGQtNmY2Yi00ZmNlLWFkOTQtM2FjNjBlNWZiMzhmIiwiZW52aXJvbm1lbnRpZCI6InAtMERpQUR0eWdJa3FId2RSd3ZjQ3RFQSIsImVudmlyb25tZW50bmFtZSI6IkEuRC5SLkEuIEVudmlyb25tZW50IDEiLCJsZWdhbGVudGl0eWlkIjoicC1XS1FIZG1sd2gwLTVrRjdMd2dQT3dBIiwibGVnYWxlbnRpdHluYW1lIjoiQWR2ZW50aXN0IERldmVsb3BtZW50IGFuZCBSZWxpZWYgQWdlbmN5IEludGVybmF0aW9uYWwiLCJ6b25lIjoicC11c2EwMSIsImlzcyI6Imh0dHBzOi8vb2F1dGgyLnNreS5ibGFja2JhdWQuY29tLyIsImF1ZCI6ImJsYWNrYmF1ZCIsImV4cCI6MTYwNDYxMjExOCwibmJmIjoxNjA0NjA4NTE4fQ.P0v1J77nG3wS__s5awn6SlDS8zkZBkaWncYQJi0-IFWELvzTd4rjTqY7C8POVOokgR0hcbelAAKwEQuOrf02nhMzWd098KuPLUyXrV7ivO6Ue--5cQUqgkDK_2FMSzTGdMhzidnzNd9FBW68B7B62vgVRUlh9JtijFFDy3cmpJmNbMZhNskDVjjwtVbN4RoCQlkP7TpnMYJa1E2nGi2YmxS0zm_i2mZ2HgN1fAhszDg4QQx-kCJsNQfpDgwh_kavFvxYuOjVBc2xcwe3oD4KHyRhSGmNAT1IVNoH1e-eCQ_KVMn_exuti7bfQXqvfau96juKUASd9i30d-KTRuSqWg"}

let donateButton = document.getElementById("input_2")

donateButton.addEventListener("click",tokenizeCard)

function tokenizeCard()
{

let data = {
    "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Bearer " + accessToken.access_token,
    "Bb-Api-Subscription-Key": "4ab886064b654cd18223f652e8df8cf0",
    "Access-Control-Allow-Origin": "*"
  },
    "body": {
        "exp_month": document.getElementById("input_3_cc_exp_month").value,
        "exp_year": document.getElementById("input_3_cc_exp_year").value,
        "name": document.getElementById("input_3_cc_firstName").value,
        "number": document.getElementById("input_3_cc_number").value    
  }
}

console.log(data)

axios.post('https://api.sky.blackbaud.com/payments/v1/cardtokens',data)
.then(function (response) {
    // handle success
    console.log(response);
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
})
};