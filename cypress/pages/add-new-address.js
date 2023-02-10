import AddNewAddressFixture from '../fixtures/addNewAddress.json'

class AddNewAddress{
    
    preencheFormularioDeEndereco(phoneNum, streetAddress, cityName, postalCode, countryName, stateName){
        
        cy.get(AddNewAddressFixture.seletores.linkPhonenum)
            .type(phoneNum)
        cy.get(AddNewAddressFixture.seletores.linkStreetAddress)
            .type(streetAddress)
        cy.get(AddNewAddressFixture.seletores.linkCity)
            .type(cityName)
        cy.get(AddNewAddressFixture.seletores.linkPostalCode)
            .type(postalCode)
        
        if(countryName == "Brazil" || countryName == "United States"){
            cy.get(AddNewAddressFixture.seletores.linkCountry)
                .select(countryName)
            cy.get(AddNewAddressFixture.seletores.linkSelectState)
                .select(stateName)
        }else{
            cy.get(AddNewAddressFixture.seletores.linkCountry)
                .select(countryName)
            cy.get(AddNewAddressFixture.seletores.linkInputState)
                .type(countryName)
        }
    }

    enviaFormularioDeEndereco(seletorBtn){
        cy.get(seletorBtn).click()
    }
}

export default AddNewAddress