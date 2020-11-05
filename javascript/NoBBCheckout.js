let accessToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjREVjZzVkxIM0FtU1JTbUZqMk04Wm5wWHU3WSJ9.eyJuYW1laWQiOiI3YjhiYTcwZC0yNzhiLTRkOWQtYWI3ZS1mM2VhNWYyMDM2NDUiLCJhcHBsaWNhdGlvbmlkIjoiYTA1NmNhNmItYTNhOC00YWM3LWIzMjUtOTk3NjY2MzA2ZTUyIiwiZW52aXJvbm1lbnRpZCI6InAtMERpQUR0eWdJa3FId2RSd3ZjQ3RFQSIsImVudmlyb25tZW50bmFtZSI6IkEuRC5SLkEuIEVudmlyb25tZW50IDEiLCJsZWdhbGVudGl0eWlkIjoicC1XS1FIZG1sd2gwLTVrRjdMd2dQT3dBIiwibGVnYWxlbnRpdHluYW1lIjoiQWR2ZW50aXN0IERldmVsb3BtZW50IGFuZCBSZWxpZWYgQWdlbmN5IEludGVybmF0aW9uYWwiLCJ6b25lIjoicC11c2EwMSIsImlzcyI6Imh0dHBzOi8vb2F1dGgyLnNreS5ibGFja2JhdWQuY29tLyIsImF1ZCI6ImJsYWNrYmF1ZCIsImV4cCI6MTYwNDYxNDA0MiwibmJmIjoxNjA0NjEwNDQyfQ.Se85aB67tsmqYJtHW5t3LsTMdwhbqVSiUvqGX9FW1DjXKcx_uablSvLv7zz72hkIXjxtN1OjeBjmFaPptSUfiFbDboyp57RtWpY2Jm9HJhq9R9DnaiTojXHr0FoP_-GqedQrl3nrvyunH-y1DIYI7kaAUUuweGkeZqDFtFQY0Cb48Q1nE0XTt9JyWqZHvP0BH3TIfuemYnRl5uXXbHl796d3Iuo37bOW7KRhhp1iDCfunIIPAJ8pCRrVp0llrbAaIn6YK7S3j5yMwbEkRtxw5qNI-Xxrm2Egtc0cWHhRtIMX9ltWrhnf7iT4OeBxx2qQonwx353HZGAy3ILNvUxBlw"

let donateButton = document.getElementById("input_2")

donateButton.addEventListener("click",tokenizeCard)

function tokenizeCard()
{

let auth = {
    "headers": {
    "Content-Type": "application/json-patch+json",
    "Authorization": accessToken,
    "Bb-Api-Subscription-Key": "4ab886064b654cd18223f652e8df8cf0",
    "Access-Control-Allow-Origin": "*"
    }
}
let body = 
{
    "exp_month": document.getElementById("input_3_cc_exp_month").value,
    "exp_year": document.getElementById("input_3_cc_exp_year").value,
    "name": document.getElementById("input_3_cc_firstName").value,
    "number": document.getElementById("input_3_cc_number").value   
}

axios.post('https://api.sky.blackbaud.com/payments/v1/cardtokens',body,auth)
.then(function (response) {
    // handle success
    console.log(response);
    alert("The stored card token is:" + response.data.card_token.toString())
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
})

};