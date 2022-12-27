const data = {
  email: "#Email",
  pwd: "#Password",
  url: "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F",
  loginButton: "//button[@type='submit']",
};

export const LoginPage = () => {
  const { url, email, pwd, loginButton } = data;

  cy.visit(url);
  cy.get(email).clear().type("admin@yourstore.com");
  cy.get(pwd).clear().type("admin");
  cy.xpath(loginButton).click({force: true});
  cy.title().should("eq", "Dashboard / nopCommerce administration");
};
