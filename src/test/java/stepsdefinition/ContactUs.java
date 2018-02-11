package stepsdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import page.ContactUsPage;

import static org.junit.Assert.assertEquals;

/**
 * Created by ribake on 11/02/2018.
 */
public class ContactUs {
    private WebDriver driver = Hooks.driver;


    @Given("^I am on the QAWorks Site$")
    public void i_am_on_the_QAWorks_Site() throws Throwable {
        String qaWorksURL = "http://www.qaworks.com/";
        driver.get(qaWorksURL);

        //Validate the home page
        assertEquals(qaWorksURL, driver.getCurrentUrl());
        String expectedTitle = "QAWorks Limited - Software Quality & Delivery Experts";
        assertEquals(expectedTitle, driver.getTitle());
    }

    @Then("^I should be able to contact QAWorks with the following information \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_should_be_able_to_contact_QAWorks_with_the_following_information(String name, String email,
                                                                                   String subject, String message)
                                                                                    throws Throwable {

        // click on Contact Us
        WebElement contactus = driver.findElement(By.linkText("CONTACT US"));
        contactus.click();

        // Validate contact us page
        String contactusURL = "http://www.qaworks.com/contact-us/";
        String contactusTitle = "CONTACT US | QAWorks Limited";

        assertEquals(contactusURL, driver.getCurrentUrl());
        assertEquals(contactusTitle, driver.getTitle());

        // Enter the values into the form
        ContactUsPage contactUsPage = new ContactUsPage(driver);
        contactUsPage.enterName(name);
        contactUsPage.enterEmail(email);
        contactUsPage.enterSubject(subject);
        contactUsPage.enterMessage(message);

        // Submit the information
        contactUsPage.submit();

        // There should be no error message
        WebDriverWait waitForSuccess = new WebDriverWait(driver, 5);

        String errorMsgXpath = "//*[@id=\"qaworks-contact-us\"]/div[2]/text()";
        ExpectedCondition successCondition = ExpectedConditions.invisibilityOfElementWithText(By.xpath(errorMsgXpath),
                "There was an error trying to send your message. Please try again later.");

        waitForSuccess.until(successCondition);

    }


}
