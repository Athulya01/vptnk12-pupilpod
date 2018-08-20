export const regEx = {
        name: '[A-Za-z][A-Za-z\'. ]+[A-Za-z]',
        trustName: '[A-Za-z0-9][A-Za-z0-9& ]*[A-Za-z0-9 ]',
        email: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
        number: '[0-9]*$',
        website: '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}' +
                '|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}' +
                '|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}' +
                '|www\.[a-zA-Z0-9]\.[^\s]{2,}' + '|[a-zA-Z0-9]\.[^\s]{2,})',
        address: '^[#.0-9a-zA-Z ,-]*$',
        schoolId: '[A-Za-z0-9][A-Za-z0-9/-]*[A-Za-z0-9]',
        pinCode: '[0-9]{6}',
        mid: '[A-Za-z0-9]*',
        phoneNumber: '[0-9]{10,10}',
        invoiceTitle: '[A-Za-z0-9][A-Za-z0-9 -]+',
        amount: '/^\d+(\.\d{1,2})?$/',
        series: '[A-Za-z0-9/-]+'
};

