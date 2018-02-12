package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by ribake on 12/02/2018.
 * Page class for QAWorks.com home page.
 * Used to perform UI interactions on the page
 */
public class HomePage {
    private WebDriver driver;
    private WebElement contactUs;

    public HomePage(WebDriver driver){
        this.driver = driver;
        contactUs = driver.findElement(By.linkText("CONTACT US"));
    }

    /**
     * Open the Contact Us page
     */
    public void openContactUsPage(){
        contactUs.click();
    }
}
