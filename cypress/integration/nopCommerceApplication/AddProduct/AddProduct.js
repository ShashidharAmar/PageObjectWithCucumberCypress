import { Then } from "cypress-cucumber-preprocessor/steps";
import {LoginPage} from '../Helper/Login'

const data = {
               catalog : "//p[normalize-space()='Catalog']",
               products : "//p[normalize-space()='Products']",
               addNew : "//a[@class='btn btn-primary']",
               productName : "//input[@id='Name']",
               selectComputer : "//li[normalize-space()='Computers']",
               saveButton : "//button[@name='save']//i[@class='far fa-save']"
             }

             
const { catalog, products,productInfo, addNew, productName, selectComputer, saveButton} = data
Then('click on catalog and select product',()=>
{
  LoginPage()
  // cy.xpath(catalog).click({force:true})
  cy.xpath('//i[@class="nav-icon fas fa-book"]/..//p[contains(text(),"Catalog")]/..').click()
  cy.xpath(products).click({force:true})

})

Then('click on add new and fill product info',()=>
{
  cy.xpath(addNew).click()
  cy.wait(5000)
  // cy.get(ProductInfo).click()
  cy.xpath(productName).type('Computer')
  cy.xpath(selectComputer).click({force:true})

})

Then('click on save and verify message',()=>
{
   cy.xpath(saveButton).click()
   cy.get('.alert').contains('The new product has been added successfully.')
})