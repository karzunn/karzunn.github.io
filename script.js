Blackbaud_Init({
    key: "2d91906c-4f0a-4cc2-b6c9-b383056e577b",
    merchant_account_id: "258dc416-b21d-4c10-b04f-7686e08a9ca1",
    transaction_type: "card_not_present"
});

Blackbaud_Open({
    amount: '1.00',
    billing_address_email: 'test@test.com',
    billing_address_line: '123 Test Street',
    billing_address_country: 'US',
    billing_address_city: 'Slothtown',
    billing_address_post_code: '22222',
    billing_address_state: 'SC',
    card_holder: 'John Doe'
}
);

document.addEventListener('checkoutComplete', function (event) {
    console.log('Token: ', event.detail.transactionToken);
});
