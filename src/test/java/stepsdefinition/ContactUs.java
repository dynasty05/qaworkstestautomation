package stepsdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Created by ribake on 11/02/2018.
 */
public class ContactUs {

    @Given("^I am on the QAWorks Site$")
    public void i_am_on_the_QAWorks_Site() throws Throwable {

    }

    @Then("^I should be able to contact QAWorks with the following information \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
    public void i_should_be_able_to_contact_QAWorks_with_the_following_information(String name, String email,
                                                                                   String subject, String message) throws Throwable {

    }


}
