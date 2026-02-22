module.exports = {
    name: "Tacoma Patio Covers",
    email: "Tacomapatiocovers@gmail.com",
    phoneForTel: "253-231-2956",
    phoneFormatted: "(253) 231-2956",
    address: {
        lineOne: "10109 Sales Rd S"
        city: "Tacoma",
        state: "WA",
        zip: "98444",
        country: "US",
        mapLink: "https://maps.app.goo.gl/AFy2wdk2AsjPRWis9",
    },
    socials: {
        facebook: "https://www.facebook.com/tacomapatiocovers",
        instagram: "https://www.instagram.com/tacomapatiocovers",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
