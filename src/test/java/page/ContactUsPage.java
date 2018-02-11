package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by ribake on 11/02/2018.
 * Page class for Contact Us page that used to access
 * all UI elements of the page
 */
public class ContactUsPage {
    private WebDriver driver;
    private WebElement nameField;
    private WebElement emailField;
    private WebElement subjectField;
    private WebElement messageBox;
    private WebElement submitInfoButton;

    public ContactUsPage(WebDriver driver){
        this.driver = driver;
        nameField = driver.findElement(By.name("your-name"));
        emailField = driver.findElement(By.name("your-email"));
        subjectField = driver.findElement(By.name("your-company"));
        messageBox = driver.findElement(By.name("your-message"));
        submitInfoButton = driver.findElement(By.id("contact-us-send"));
    }

    public void enterName(String name){
        nameField.sendKeys(name);
    }

    public void enterEmail(String email){
        emailField.sendKeys(email);
    }

    public void enterSubject(String subject){
        subjectField.sendKeys(subject);
    }

    public void enterMessage(String message){
        messageBox.sendKeys(message);
    }

    /**
     * Submit the information entered into
     * the 'Get In Touch' form.
     */
    public void submit() {
        submitInfoButton.click();
    }
}
