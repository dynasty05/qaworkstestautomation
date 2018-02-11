package stepsdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;

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
        String title = "QAWorks Limited - Software Quality & Delivery Experts";

    }

    @Then("^I should be able to contact QAWorks with the following information \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_should_be_able_to_contact_QAWorks_with_the_following_information(String name, String email,
                                                                                   String subject, String message) throws Throwable {

    }


}
