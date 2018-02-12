$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Us Page",
  "description": "As an end user\nI want a contact us page\nSo that I can find out more about QAWorks exciting services!!",
  "id": "contact-us-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Valid Submission",
  "description": "",
  "id": "contact-us-page;valid-submission",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should be able to contact QAWorks with the following information \"\u003cname\u003e\" \"\u003cemail\u003e\" \"\u003csubject\u003e\" \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "contact-us-page;valid-submission;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subject",
        "message"
      ],
      "line": 11,
      "id": "contact-us-page;valid-submission;;1"
    },
    {
      "cells": [
        "j.Bloggs",
        "j.Bloggs@qaworks.com",
        "test automation",
        "please contact me I want to find out more"
      ],
      "line": 12,
      "id": "contact-us-page;valid-submission;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2440912437,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Valid Submission",
  "description": "",
  "id": "contact-us-page;valid-submission;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should be able to contact QAWorks with the following information \"j.Bloggs\" \"j.Bloggs@qaworks.com\" \"test automation\" \"please contact me I want to find out more\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 7406966907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.Bloggs",
      "offset": 68
    },
    {
      "val": "j.Bloggs@qaworks.com",
      "offset": 79
    },
    {
      "val": "test automation",
      "offset": 102
    },
    {
      "val": "please contact me I want to find out more",
      "offset": 120
    }
  ],
  "location": "ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(String,String,String,String)"
});
formatter.result({
  "duration": 8115101285,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.className: wpcf7-response-output.wpcf7-display-none\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Ribake\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/ql/l_4hlp757jg_vx5x1nz8f2600000gn/T/.org.chromium.Chromium.gJNha8}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.140, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8def964eb2cd1e83b61c899b39382cc0\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(ContactUs.java:106)\n\tat ✽.Then I should be able to contact QAWorks with the following information \"j.Bloggs\" \"j.Bloggs@qaworks.com\" \"test automation\" \"please contact me I want to find out more\"(features/contactus.feature:8)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"wpcf7-response-output.wpcf7-display-none\"}\n  (Session info: chrome\u003d64.0.3282.140)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.13.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Ribake\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/ql/l_4hlp757jg_vx5x1nz8f2600000gn/T/.org.chromium.Chromium.gJNha8}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.140, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8def964eb2cd1e83b61c899b39382cc0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:433)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:387)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:106)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:103)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(ContactUs.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:55)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:47)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1600254966,
  "status": "passed"
});
formatter.before({
  "duration": 1410038144,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Email Address",
  "description": "",
  "id": "contact-us-page;invalid-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I open Contact Us Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter an invalid email address",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see an email error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 6956283656,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_open_Contact_Us_Page()"
});
formatter.result({
  "duration": 1038068916,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_enter_an_invalid_email_address()"
});
formatter.result({
  "duration": 1560351818,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_email_error_message()"
});
formatter.result({
  "duration": 1161840019,
  "status": "passed"
});
formatter.after({
  "duration": 599545770,
  "status": "passed"
});
formatter.before({
  "duration": 1403488130,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Email QA Works",
  "description": "",
  "id": "contact-us-page;email-qa-works",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I open Contact Us Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be able to email QA Works using the email button",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 7309551090,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_open_Contact_Us_Page()"
});
formatter.result({
  "duration": 910194233,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_be_able_to_email_QA_Works_using_the_email_button()"
});
formatter.result({
  "duration": 506280120,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_email_QA_Works_using_the_email_button(ContactUs.java:79)\n\tat ✽.Then I should be able to email QA Works using the email button(features/contactus.feature:26)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1415336986,
  "status": "passed"
});
});