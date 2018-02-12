package stepsdefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by ribake on 11/02/2018.
 */
public class Hooks {
    public static WebDriver driver;

    // Set everything that is needed when this class loads.
    static {
        // Set other browser executables
         System.setProperty("webdriver.chrome.driver", "/Users/user/Installations/chromedriver");
    }


    @Before
    /**
     * Executes before every scenario.
     * Deletes all browser cookies present in browser
     */
    public void before(){
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        // Set default Pageload timeout of 10 seconds
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);

    }


    @After
    /**
     * Executes after each scenario.
     * Closes the browser. Captures screenshot if
     * the scenario failed.
     */
    public void after(Scenario scenario){

        if(scenario.isFailed()){

            System.out.println("Scenario "+ scenario.getName() + "failed");
            System.out.println("Taking screenshot");

            try{
                byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");

            } catch (WebDriverException w){
                System.err.println("Could not capture screenshot");
            }


        } else {
            System.out.println("Scenario "+ scenario.getName() + "passed");
        }

        // close the browser
        driver.quit();

    }

}
