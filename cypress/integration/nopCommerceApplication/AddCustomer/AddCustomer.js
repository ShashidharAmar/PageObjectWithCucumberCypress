
import { Then, When } from "cypress-cucumber-preprocessor/steps";
import {LoginPage} from '../Helper/Login'

const data = {
   customerButton : "//a[@href='#']//p[contains(text(),\"Customers\")]",
   subCustButton: "//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]",
   addnNewCust: "//a[@class=\"btn btn-primary\"]",
   email: "//input[@id=\"Email\"]",
   firstname: "//input[@id=\"FirstName\"]",
   lastname: "//input[@id='LastName']",
   saveButton: "//button[@name='save']",
   }

const {customerButton, subCustButton, addnNewCust, email, firstname, lastname, saveButton} = data

When('user click on customer button',()=>
 {
   LoginPage()
   cy.xpath(customerButton).click({force: true})

 })

 Then('click on customer sub menu button',()=>
 {
   cy.wait(2000)
    cy.xpath(subCustButton).click({force: true})

 })

 Then('Click on add new customer',()=>
 {
    cy.wait(4000)
    cy.xpath(addnNewCust).click({force: true})

 })

 Then('fill all mondatary detail',()=>
 {
    cy.xpath(email).type('Shashidhar@gmail.com')
    cy.xpath(firstname).type('Shashidhar')
    cy.xpath(lastname).type('Amarannavar')

 })

 Then('click on save button',()=>
 {
    cy.xpath(saveButton).click()

 })