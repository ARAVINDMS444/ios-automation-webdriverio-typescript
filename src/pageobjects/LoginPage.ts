export class LoginPage {
  static get usernameField(): ChainablePromiseElement {
    return $("~test-Username");
  }

  static get passwordField(): ChainablePromiseElement {
    return $("~test-Password");
  }

  static get loginButton(): ChainablePromiseElement {
    return $("~test-LOGIN");
  }

  static get productsTitleById(): ChainablePromiseElement {
    return $("~test-PRODUCTS");
  }

  static get productsTitleByXPath(): ChainablePromiseElement {
    return $('//XCUIElementTypeStaticText[@name="PRODUCTS"]');
  }
}
