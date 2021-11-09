// For non CP 9
const standardOffsetRule = [
    {
        itemCode: 'MB(S) 0.5',
        month: 10,
        items: [
            {
                itemCode: "MB(S) 0.5",
                description: "0.5 Year New Membership (Subsidiary) – $375",
                quantity: 0,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0.103,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0.8970,
            },
            {
                itemCode: "MB(S) 0.5.2",
                description: "New Membership (Subsidiary) - 1 Year Y+0 (mth)",
                quantity: 5,
            }
        ]
    }
];

const generateInvoice = (invoiceRes, month) => {
    console.log("Item code: ", invoiceRes.itemCode, ", package name: ", invoiceRes.packageName, ", month: ", month);
    const invoiceItems = standardOffsetRule.filter(e => e.itemCode == invoiceRes.itemCode && e.month == month)
    return invoiceItems && invoiceItems.length > 0 ? invoiceItems[0].items : null;


}

module.exports = generateInvoice;