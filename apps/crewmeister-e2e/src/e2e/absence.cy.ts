/**
 * Integration - Absence_Spec
 */

const delay = 1000

describe('Taskbar should work', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Filter by absence type should work', () => {
    cy.get('[data-cy="table"]')
      .within(() => {
        cy.get('[data-cy="task-bar"]').within(() => {
          cy.get('.form-select').should('have.value', 'Absence Type')
          cy.get('.form-select').select(1).should('have.value', 'sickness')
          cy.get('.form-select').select(2).should('have.value', 'vacation')
        })
      })
      .should('have.class', 'overflow-x-auto relative shadow-md sm:rounded-lg')
  })

  it('Filter by absence date should work', { defaultCommandTimeout: 5000 }, () => {
    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="task-bar"]').within(() => {
        cy.get('.form-select').should('have.value', 'Absence Type').wait(delay)
        cy.get('[data-testid="datepicker-input"]')
          .click({ force: true })
          .should('have.attr', 'placeholder', 'Select a date')
          .wait(delay)
      })
    })
  })

  it('Sort by name should work', () => {
    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name-header"]')
        .within(() => {
          cy.get('[data-cy="asc-sort"]').click().wait(delay)
          cy.get('[data-cy="des-sort"]').click().wait(delay)
        })
        .should('have.class', 'py-3')
    })
  })

  it('Sort by type should work', () => {
    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="type-header"]')
        .within(() => {
          cy.get('[data-cy="asc-sort"]').click().wait(delay)
          cy.get('[data-cy="des-sort"]').click().wait(delay)
        })
        .should('have.class', 'py-3')
    })
  })

  it('Action button should work', () => {
    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="show-action-0"]').click().wait(delay)
    })

    cy.get('[data-cy="off-canvas"]')
      .should('be.visible')
      .wait(delay)
      .within(() => {
        cy.get('[data-cy="close-offcanvas"]').click({ force: true }).should('not.be.visible')
      })
      .wait(delay)
  })

  it('Pagination should work', () => {
    cy.get('[data-cy="table-pagination"]')
      .within(() => {
        cy.get('[data-cy="pagination-info"]').within(() => {
          cy.get('[data-cy="to"]').contains('10')
          cy.get('[data-cy="from"]').contains('1')
        })

        cy.get('[data-cy="nav-forward"]').click().wait(delay)
        cy.get('[data-cy="pagination-info"]').within(() => {
          cy.get('[data-cy="to"]').contains('20')
          cy.get('[data-cy="from"]').contains('11')
        })

        cy.get('[data-cy="nav-back"]').click().wait(delay)
        cy.get('[data-cy="pagination-info"]').within(() => {
          cy.get('[data-cy="to"]').contains('10')
          cy.get('[data-cy="from"]').contains('1')
        })
      })
      .should('have.class', 'p-3')
  })
})
