export const registerUserApi = `${process.env.VITE_REGISTER_USER_API}`;

export const headers_ = {
    'Authorization': `Bearer ${process.env.VITE_AIRTABLE_TOKEN}`,
    'Content-Type': 'application/json'
};