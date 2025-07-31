export class HomePage {
  static productsPrices(i: number): ChainablePromiseElement {
    return $(`(//XCUIElementTypeStaticText[@name="test-Price"])[${i}]`);
  }
}
