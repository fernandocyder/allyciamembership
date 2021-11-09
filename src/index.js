const generateInvoice = require('./membershiprule');

const MONTH = 3;
const ITEMCODE = "MB(S) 1"

const testInvoice = (month) => {

    const invoiceRes = {
        packageName: 'Allycia Faith',
        itemCode: ITEMCODE
    };
    const invoiteItems = generateInvoice(invoiceRes, month);
    console.log(invoiteItems)
}

// 1, 0.5 Year New Membership, MB(S) 0.5
// 2, 1 Year New Membership, MB(S) 1
// 3, 1.5 Year New Membership (10% discount), MB(S) 1.5
// 4, 2 Year Promotion (10% discount), MB(S) 2
// 5, 1 Year Membership Renewal, MB-R(S) 1
// 6, 2 Year Membership Renewal, MB-R(S) 2

// for (var i = 1; i <= 12; i++) {
//     testInvoice(i);
//     console.log("");
//     console.log("-----")
//     console.log("");
// }


testInvoice(MONTH);