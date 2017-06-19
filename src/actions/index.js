export const performAuthentication = (username, password) => ({
    type: 'LOGIN',
    username,
    password
})