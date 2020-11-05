Blackbaud_Init({
    key: "2d91906c-4f0a-4cc2-b6c9-b383056e577b",
    merchant_account_id: "258dc416-b21d-4c10-b04f-7686e08a9ca1",
    transaction_type: "store_card"
});


Blackbaud_OpenStoreCardForm(
    {
        card_token: "ce53bcff-c26d-4c8e-af6c-b54d038ef776",
        key: "2d91906c-4f0a-4cc2-b6c9-b383056e577b",
        primary_color: "#14795a",
        secondary_color: "#cc9f51",
        font_color: "#FFFFFF",
        font_family: "sans-serif"
    }
)

document.addEventListener('checkoutComplete', function (event) {
    console.log('Token: ', event.detail.transactionToken);
});

