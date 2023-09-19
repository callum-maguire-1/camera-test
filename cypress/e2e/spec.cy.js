describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002');

    cy.get('[data-cy="camera-link"]')
    .invoke("removeAttr", "target")
    .then(($link) => {
      const url = $link.prop("href");
      cy.visit(url);
      cy.window().then((win) => {
        win.location.href = url;
      });
      cy.reload();
    });
  })
})