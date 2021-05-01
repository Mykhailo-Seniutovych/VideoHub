const config = {
    authority: "https://localhost:5001",
    //client_id: "javascript_client_id",
    client_id: "web_client",
    redirect_uri: "http://127.0.0.1:5501/callback.html",
    response_type: "id_token token",
    scope:"openid api",
};
const userManager = new Oidc.UserManager(config);

async function signIn() {
    await userManager.signinRedirect();
}

async function callApi() {
    const user = await userManager.getUser();
    console.log(user);
    const apiUrl = "https://localhost:5002/api/data/secret";
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Authorization": `Bearer ${user.access_token}` }
    });
    console.log(await response.text());
}

async function getData() {

}