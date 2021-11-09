const generateInvoice = require('./membershiprule');

const testInvoice = (fakeMonth) => {

    const invoiceRes = {
        membershipPackageId: 6,
        packageName: '1 Year New Membership',
        itemCode: 'MB.1'
    };
    const invoiteItems = generateInvoice(invoiceRes, fakeMonth);
    console.log(invoiteItems)
}

// 1, 1 Year New Membership, MB.1
// 2, 0.5 Year New Membership, MB.3
// 3, 2 Year Promotion (10% discount), MB.2
// 4, 2 Year Membership Renewal, MB.2
// 5, 1 Year Membership Renewal, MB.1
// 6, 1.5 Year New Membership (10% discount), MB.4
for (var i = 1; i <= 12; i++) {
    testInvoice(i);
}
