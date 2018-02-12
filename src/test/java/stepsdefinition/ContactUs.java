package stepsdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.omg.CORBA.StringHolder;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import page.ContactUsPage;
import page.HomePage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * Created by ribake on 11/02/2018.
 */
public class ContactUs {
    private WebDriver driver;
    private ContactUsPage contactUsPage;


    @Given("^I am on the QAWorks Site$")
    public void i_am_on_the_QAWorks_Site() throws Throwable {
        driver = Hooks.driver;
        String qaWorksURL = "http://www.qaworks.com/";
        driver.get(qaWorksURL);

        //Validate the home page
        assertEquals(qaWorksURL, driver.getCurrentUrl());
        String expectedTitle = "QAWorks Limited - Software Quality & Delivery Experts";
        assertEquals(expectedTitle, driver.getTitle());
    }

    @Given("^I open Contact Us Page$")
    public void i_open_Contact_Us_Page() throws Throwable {
        goToContactUs();
    }

    @When("^I enter an invalid email address$")
    public void i_enter_an_invalid_email_address() throws Throwable {
        // get a ContactUS page object
        contactUsPage = new ContactUsPage(driver);

        // enter the form fields
        contactUsPage.enterName("Joe Bloggs");
        contactUsPage.enterEmail("invalid email");
        contactUsPage.enterSubject("Test Subject");
        contactUsPage.enterMessage("Some test message");

        // submit the form
        contactUsPage.submitForm();
    }

    @Then("^I should see an email error message$")
    public void i_should_see_an_email_error_message() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("wpcf7-not-valid-tip")));


    }

    @Then("^I should be able to contact QAWorks with the following information \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_should_be_able_to_contact_QAWorks_with_the_following_information(String name, String email,
                                                                                   String subject, String message)
                                                                                    throws Throwable {

        goToContactUs();

        // Enter the values into the form
        contactUsPage = new ContactUsPage(driver);
        contactUsPage.enterName(name);
        contactUsPage.enterEmail(email);
        contactUsPage.enterSubject(subject);
        contactUsPage.enterMessage(message);

        // Submit the information
        contactUsPage.submitForm();

        // There should be no error message with valid submission
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("wpcf7-response-output.wpcf7-display-none")));

        System.out.println("Form submitted with no errors");

    }

    @When("^I omit one of the following information on the form \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_omit_one_of_the_following_information_on_the_form(String name, String email,
                                                                    String subject, String message) throws Throwable {
        goToContactUs();

        contactUsPage = new ContactUsPage(driver);
        contactUsPage.enterName(name);
        contactUsPage.enterEmail(email);
        contactUsPage.enterSubject(subject);
        contactUsPage.enterMessage(message);
    }


    @When("^I submit the form$")
    public void i_submit_the_form() throws Throwable {
        //submitForm
        contactUsPage.submitForm();

    }

    @Then("^I should see an error message$")
    public void i_should_see_an_error_message() throws Throwable {
        // wait until the default div is no longer on page
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.className("wpcf7-response-output.wpcf7-display-none")));

//       assertNotNull(driver.findElement(By.className("close toggle-alert")));

        // Verify error message is displayed
        System.out.println("Validation error displayed");

    }


    /**
     * Opens the Contact Us page and validates the page
     */
    private void goToContactUs(){
        HomePage homePage = new HomePage(driver);
        homePage.openContactUsPage();

        // Validate contact us page
        String contactusURL = "http://www.qaworks.com/contact-us/";
        String contactusTitle = "CONTACT US | QAWorks Limited";

        assertEquals(contactusURL, driver.getCurrentUrl());
        assertEquals(contactusTitle, driver.getTitle());
    }


}
