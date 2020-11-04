Blackbaud_Init({
    key: "2d91906c-4f0a-4cc2-b6c9-b383056e577b",
    merchant_account_id: "258dc416-b21d-4c10-b04f-7686e08a9ca1",
    transaction_type: "store_card_info"
});


Blackbaud_OpenStoreCardForm(
    {
        card_token: "6672ba4b-fd19-4cde-80c1-c7e541929b07",
        key: "2d91906c-4f0a-4cc2-b6c9-b383056e577b"
    }
)

document.addEventListener('checkoutComplete', function (event) {
    console.log('Token: ', event.detail.transactionToken);
});

