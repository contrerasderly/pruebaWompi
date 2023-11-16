describe("Payment methods", () => {
  //PSE

  it("PSE - Transaction approved", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(5)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get(".submit-button").click();
    cy.get("#financialInstitutionCode")
      .select("Banco que aprueba")
      .should("have.value", "1");
    cy.get("#userLegalIdType")
      .select("CC - Cédula de ciudadanía")
      .should("have.value", "CC");
    cy.get("#userLegalId").type(1999888777);
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    cy.get(".title__-7har").should("have.text", "Transacción aprobada (PSE)");
    cy.log("La transacción mediante PSE fue aprobada");
  });

  it("PSE - Transaction declined", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(5)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get(".submit-button").click();
    cy.get("#financialInstitutionCode")
      .select("Banco que declina")
      .should("have.value", "2");
    cy.get("#userLegalIdType")
      .select("NIT - Número de idenificación tributaria")
      .should("have.value", "NIT");
    cy.get("#userLegalId").type(1999888777);
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    cy.get(".title__-7har").should("have.text", "Transacción declinada (PSE)");
    cy.log("La transacción mediante PSE fue declinada");
  });

  it("PSE - Transaction error", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(5)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get(".submit-button").click();
    cy.get("#financialInstitutionCode")
      .select("Banco que simula un error")
      .should("have.value", "3");
    cy.get("#userLegalIdType")
      .select("NIT - Número de idenificación tributaria")
      .should("have.value", "NIT");
    cy.get("#userLegalId").type(1999888777);
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    // cy.get(".title__-7har").should("have.text", "Transacción con error (PSE)");
    cy.log("La transacción mediante PSE fue rechazada por error");
  });

  //Nequi

  it("Nequi - Transaction approved", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(4)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3991111111");
    cy.get(".submit-button").click();
    cy.get("#phoneNumber").click();
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(4000);
    cy.get(".src-components-App-__App__title__Y13rn").should(
      "have.text",
      "Transacción aprobada (Nequi)"
    );
    cy.log("La transacción mediante nequi fue aprobada");
  });

  it("Nequi - Transaction declined", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(4)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3992222222");
    cy.get(".submit-button").click();
    cy.get("#phoneNumber").click();
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(4000);
    cy.get(".src-components-App-__App__title__Y13rn").should(
      "have.text",
      "Transacción declinada (Nequi)"
    );
    cy.log("La transacción mediante nequi fue rechazada");
  });

  //QR Bancolombia

  it("QR Bancolombia - Transaction approved", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(2)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get("#sandboxStatusQR")
      .select("Transacción APROBADA")
      .should("have.value", "APPROVED");
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    cy.get(".src-components-App-__App__title__Y13rn").should(
      "have.text",
      "Transacción aprobada (QR Bancolombia)"
    );
    cy.log("La transacción mediante QR Bancolombia fue aprobada");
  });

  it("QR Bancolombia - Transaction declined", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(2)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get("#sandboxStatusQR")
      .select("Transacción DECLINADA")
      .should("have.value", "DECLINED");
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    cy.get(".src-components-App-__App__title__Y13rn").should(
      "have.text",
      "Transacción declinada (QR Bancolombia)"
    );
    cy.log("La transacción mediante QR Bancolombia fue rechazada");
  });

  it("QR Bancolombia - Transaction error", () => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");
    cy.wait(500);
    cy.get(".amount-input").click().type("50000");
    cy.wait(500);
    cy.get(".submit-button").click();
    cy.get(
      ".src-components-PaymentMethod-__PaymentMethod__methods__T_j6N > :nth-child(2)"
    ).click();
    cy.get("#email").click().type("contrerasderly@gmail.com");
    cy.get("#fullName").click().type("Derly Yelitza Contreras Capacho");
    cy.get("#number").click().type("3102781794");
    cy.get("#sandboxStatusQR")
      .select("Transacción con ERROR")
      .should("have.value", "ERROR");
    cy.get("#acceptance").check();
    cy.get(".submit-button").click();
    cy.wait(1500);
    cy.get(".src-components-App-__App__title__Y13rn").should(
      "have.text",
      "Transacción con error (QR Bancolombia)"
    );
    cy.log("La transacción mediante QR Bancolombia está erronea");
  });
});
