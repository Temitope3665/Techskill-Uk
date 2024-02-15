export const registerUserApi = "https://api.airtable.com/v0/appyVoGshoAmlEEOg/Users";
export const contactUsApi = "https://api.airtable.com/v0/appyVoGshoAmlEEOg/ContactUs";
export const registerEmailApi = "https://api.airtable.com/v0/appyVoGshoAmlEEOg/Emails";

export const headers_ = {
    'Authorization': `Bearer ${process.env.VITE_ARITABLE_TOKEN}`,
    'Content-Type': 'application/json'
};