// For non CP 9
const standardOffsetRule = [
    {
        group: 'MB(S) 0.5',
        month: 11,
        items: [
            {
                itemCode: "MB(S) 0.5",
                description: "0.5 Year New Membership (Subsidiary) – $375",
                quantity: 0,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 4.103,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0.8970,
            },
            {
                itemCode: "MB(S) 0.5.2",
                description: "New Membership (Subsidiary) - 1 Year Y+0 (mth)",
                quantity: 1,
            }
        ]
    },
    {
        group: 'MB(S) 0.5',
        month: 8,
        items: [
            {
                itemCode: "MB(S) 0.5",
                description: "0.5 Year New Membership (Subsidiary) – $375",
                quantity: 1,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 2,
            },
            {
                itemCode: "MB(S) 0.5.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0,
            },
            {
                itemCode: "MB(S) 0.5.2",
                description: "New Membership (Subsidiary) - 1 Year Y+0 (mth)",
                quantity: 4,
            }
        ]
    }, 
    {
        group: 'MB(S) 0.5',
        month: 7,
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
    },
    {
        group: 'MB(S) 1',
        month: 1,
        items: [
            {
                itemCode: "MB(S) 1",
                description: "01 Year New Membership (Subsidiary) – $750",
                quantity: 0,
            },
            {
                itemCode: "MB(S) 1.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0.103,
            },
            {
                itemCode: "MB(S) 1.1",
                description: "New Membership (Subsidiary) - 1 Year Y+0 Immediate Recognition",
                quantity: 0.8970,
            },
            {
                itemCode: "MB(S) 1.2",
                description: "New Membership (Subsidiary) - 1 Year Y+0 (mth)",
                quantity: 11,
            },
            {
                itemCode: "MB(S) 1.2",
                description: "New Membership (Subsidiary) - 1 Year Y+0 (mth)",
                quantity: 0,
            },
            {
                itemCode: "MB(S) 1.3",
                description: "New Membership (Subsidiary) - 1 Year Y+1 (mth)",
                quantity: 0,
            }
        ]
    },
];

const generateInvoice = (invoiceRes, month) => {
    console.log("Item code: ", invoiceRes.itemCode, ", package name: ", invoiceRes.packageName, ", month: ", month);
    const invoiceItems = standardOffsetRule.filter(e => e.group == invoiceRes.itemCode && e.month == month)
    return invoiceItems && invoiceItems.length > 0 ? invoiceItems[0].items : null;


}

module.exports = generateInvoice;