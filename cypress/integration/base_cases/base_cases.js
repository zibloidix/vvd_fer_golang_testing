describe("First test", () => {


      it('АТ_Э_ГЛВ: ОТКРЫТЬ', () => {
        cy.visit('http://localhost:3001/')
        cy.wait(1000)
        cy.get('#wellcome-to-service').should('have.length', 1)
      })

      it('АТ_Э_ГЛВ: КНОП_НАЧАТЬ_ЕСТЬ', () => {
        cy.get('#wellcome-to-service > div > div > div.card-body.p-4 > div.row.pt-4 > div > div > button').should('have.length', 1)
      })

      it('АТ_Э_ГЛВ: КНОП_НАЧАТЬ_КЛИК', () => {
        cy.get('#wellcome-to-service > div > div > div.card-body.p-4 > div.row.pt-4 > div > div > button').click()
        cy.wait(1000)
      })
      
      it('АТ_Э_ПЦНТ: ОТКРЫТЬ', () => {
        cy.get('#get-patient-data').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ФАМ_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div.row.pt-3 > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ФАМ_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div.row.pt-3 > div > input').type('Иванов')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div.row.pt-3 > div > input').should('have.value', 'Иванов')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ИМЯ_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(4) > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ИМЯ_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(4) > div > input').type('Николай')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(4) > div > input').should('have.value', 'Николай')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ОТЧ_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(5) > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ОТЧ_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(5) > div > input').type('Михайлович')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(5) > div > input').should('have.value', 'Михайлович')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ДР_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(5) > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ДР_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(6) > div > input').type('1970-01-01')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(6) > div > input').should('have.value', '1970-01-01')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_СНИЛС_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(8) > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_СНИЛС_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(8) > div > input').type('077-507-507 77')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(8) > div > input').should('have.value', '077-507-507 77')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_СЕРИЯ_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-4 > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_СЕРИЯ_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-4 > input').type('6406')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-4 > input').should('have.value', '6406')
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ПОЛИС_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-8 > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ПОЛИС_РЕДАКТ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-8 > input').type('6555320938000080')
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(9) > div.col-8 > input').should('have.value', '6555320938000080')
      })

      it('АТ_Э_ПЦНТ: КНОП_ДАЛ_ЕСТЬ', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(11) > div > button').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: КНОП_ДАЛ_КЛИК', () => {
        cy.get('#get-patient-data > div > div.card.shadow-sm.mb-4 > div > div:nth-child(11) > div > button').click()
        cy.wait(1000)
      })

      it('АТ_Э_МО: ОТКРЫТЬ', () => {
        cy.get('#get-mo-info-extended').should('have.length', 1)
      })

      it('АТ_Э_МО: ПОЛЕ_ПОИСК_ЕСТЬ', () => {
        cy.get('#get-mo-info-extended > div > div.card.shadow-sm.mb-4 > div > div.row.pt-4 > div > div > input').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: ПОЛЕ_ПОИСК_РЕДАКТ', () => {
        cy.get('#get-mo-info-extended > div > div.card.shadow-sm.mb-4 > div > div.row.pt-4 > div > div > input').type('ГБУЗ Городская поликлиника №2 г.Южно-Сахалинска')
        cy.get('#get-mo-info-extended > div > div.card.shadow-sm.mb-4 > div > div.row.pt-4 > div > div > input').should('have.value', 'ГБУЗ Городская поликлиника №2 г.Южно-Сахалинска')
      })

      it('АТ_Э_ПЦНТ: СПИСОК_МО_ЕСТЬ', () => {
        cy.get('#hospital-list').should('have.length', 1)
      })

      it('АТ_Э_ПЦНТ: СПИСОК_МО_НЕ_ПУСТ', () => {
        cy.get('#hospital-list').its('length').should('be.gte', 0)
      })

      it('АТ_Э_ПЦНТ: КНОП_МО_КЛИК', () => {
        cy.get('#header_194701 > button').click()
        cy.wait(1000)
      })

      it('АТ_Э_ПЦНТ: КНОП_МО_ВЫБОР_КЛИК', () => {
        cy.get('#target194701 > div > div.row.pt-4.pb-3 > div > div > button').click()
        cy.wait(1000)
      })

      it('АТ_Э_СПЕЦ: ОТКРЫТЬ', () => {
        cy.get('#get-service-specs-info').should('have.length', 1)
      })

      it('АТ_Э_СПЕЦ: СПИСОК_СПЕЦ_ЕСТЬ', () => {
        cy.get('#get-service-specs-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div').should('have.length', 1)
      })

      it('АТ_Э_СПЕЦ: СПИСОК_СПЕЦ_НЕ_ПУСТ', () => {
        cy.get('#get-service-specs-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button').its('length').should('be.gte', 0)
      })

      it('АТ_Э_СПЕЦ: СПИСОК_СПЕЦ_ВЫБОР_КЛИК', () => {
        cy.get('#get-service-specs-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button:nth-child(1)').click()
        cy.wait(1000)
      })

      it('АТ_Э_ВРАЧ: ОТКРЫТЬ', () => {
        cy.get('#get-resource-info').should('have.length', 1)
      })

      it('АТ_Э_ВРАЧ: СПИСОК_ВРАЧ_ЕСТЬ', () => {
        cy.get('#get-resource-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div').should('have.length', 1)
      })

      it('АТ_Э_ВРАЧ: СПИСОК_ВРАЧ_НЕ_ПУСТ', () => {
        cy.get('#get-resource-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button').its('length').should('be.gte', 0)
      })

      it('АТ_Э_ВРАЧ: СПИСОК_ВРАЧ_ВЫБОР_КЛИК', () => {
        cy.get('#get-resource-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button:nth-child(1)').click()
        cy.wait(1000)
      })

      it('АТ_Э_СЛОТ: ОТКРЫТЬ', () => {
        cy.get('#get-schedule-info').should('have.length', 1)
      })

      it('АТ_Э_СЛОТ: СПИСОК_СЛОТ_ЕСТЬ', () => {
        cy.get('#get-schedule-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div').should('have.length', 1)
      })

      it('АТ_Э_СЛОТ: СПИСОК_СЛОТ_НЕ_ПУСТ', () => {
        cy.get('#get-schedule-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button').its('length').should('be.gte', 0)
      })

      it('АТ_Э_СЛОТ: СПИСОК_СЛОТ_ВЫБОР_КЛИК', () => {
        cy.get('#get-schedule-info > div > div.card.shadow-sm.mb-4 > div > div.row.py-4 > div > div > button:nth-child(1)').click()
        cy.wait(1000)
      })

      it('АТ_Э_ЗАП: ОТКРЫТЬ', () => {
        cy.get('#create-appointment').should('have.length', 1)
      })

      it('АТ_Э_ЗАП: КНОП_ЗАП_ЕСТЬ', () => {
        cy.get('#create-appointment > div > div.card.shadow-sm.mb-4 > div > div.row.pt-2 > div > button').should('have.length', 1)
      })

      it('АТ_Э_ЗАП: КНОП_ЗАП_КЛИК', () => {
        cy.get('#create-appointment > div > div.card.shadow-sm.mb-4 > div > div.row.pt-2 > div > button').click()
        cy.wait(1000)
      })

      
      

      
      

      



      

      

      
      

      

      



      


          
})