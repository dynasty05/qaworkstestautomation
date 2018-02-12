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
  "duration": 2078724134,
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
  "duration": 7001196646,
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
  "duration": 7326672397,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.className: wpcf7-response-output.wpcf7-display-none\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Ribake\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/ql/l_4hlp757jg_vx5x1nz8f2600000gn/T/.org.chromium.Chromium.KC09vD}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.140, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6a3d971b2d0c64c4debd3d75c81bf6be\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(ContactUs.java:107)\n\tat ✽.Then I should be able to contact QAWorks with the following information \"j.Bloggs\" \"j.Bloggs@qaworks.com\" \"test automation\" \"please contact me I want to find out more\"(features/contactus.feature:8)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"wpcf7-response-output.wpcf7-display-none\"}\n  (Session info: chrome\u003d64.0.3282.140)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.13.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Ribake\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/ql/l_4hlp757jg_vx5x1nz8f2600000gn/T/.org.chromium.Chromium.KC09vD}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.140, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6a3d971b2d0c64c4debd3d75c81bf6be\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:433)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:387)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:106)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:103)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(ContactUs.java:107)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:55)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:47)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1422929544,
  "status": "passed"
});
formatter.before({
  "duration": 1248260687,
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
  "duration": 6996121837,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_open_Contact_Us_Page()"
});
formatter.result({
  "duration": 779376606,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_enter_an_invalid_email_address()"
});
formatter.result({
  "duration": 1229807871,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_email_error_message()"
});
formatter.result({
  "duration": 1176148789,
  "status": "passed"
});
formatter.after({
  "duration": 590545275,
  "status": "passed"
});
formatter.before({
  "duration": 1307647644,
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
  "duration": 7219786889,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_open_Contact_Us_Page()"
});
formatter.result({
  "duration": 801090717,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_be_able_to_email_QA_Works_using_the_email_button()"
});
formatter.result({
  "duration": 124388161,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_be_able_to_email_QA_Works_using_the_email_button(ContactUs.java:80)\n\tat ✽.Then I should be able to email QA Works using the email button(features/contactus.feature:26)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1322749179,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I omit one of the following information on the form \"\u003cname\u003e\" \"\u003cemail\u003e\" \"\u003csubject\u003e\" \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subject",
        "message"
      ],
      "line": 35,
      "id": "contact-us-page;incomplete-form-submission;;1"
    },
    {
      "cells": [
        "",
        "j.Bloggs@qaworks.com",
        "test automation",
        "please contact me I want to find out more"
      ],
      "line": 36,
      "id": "contact-us-page;incomplete-form-submission;;2"
    },
    {
      "cells": [
        "j.Bloggs",
        "",
        "test automation",
        "please contact me I want to find out more"
      ],
      "line": 37,
      "id": "contact-us-page;incomplete-form-submission;;3"
    },
    {
      "cells": [
        "j.Bloggs",
        "j.Bloggs@qaworks.com",
        "",
        "please contact me I want to find out more"
      ],
      "line": 38,
      "id": "contact-us-page;incomplete-form-submission;;4"
    },
    {
      "cells": [
        "j.Bloggs",
        "j.Bloggs@qaworks.com",
        "test automation",
        ""
      ],
      "line": 39,
      "id": "contact-us-page;incomplete-form-submission;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1206872764,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I omit one of the following information on the form \"\" \"j.Bloggs@qaworks.com\" \"test automation\" \"please contact me I want to find out more\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 7009739052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "j.Bloggs@qaworks.com",
      "offset": 56
    },
    {
      "val": "test automation",
      "offset": 79
    },
    {
      "val": "please contact me I want to find out more",
      "offset": 97
    }
  ],
  "location": "ContactUs.i_omit_one_of_the_following_information_on_the_form(String,String,String,String)"
});
formatter.result({
  "duration": 2335301574,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_submit_the_form()"
});
formatter.result({
  "duration": 146776600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 119690535,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_see_an_error_message(ContactUs.java:140)\n\tat ✽.Then I should see an error message(features/contactus.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1286261577,
  "status": "passed"
});
formatter.before({
  "duration": 1287084159,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I omit one of the following information on the form \"j.Bloggs\" \"\" \"test automation\" \"please contact me I want to find out more\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 6906090653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.Bloggs",
      "offset": 53
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "test automation",
      "offset": 67
    },
    {
      "val": "please contact me I want to find out more",
      "offset": 85
    }
  ],
  "location": "ContactUs.i_omit_one_of_the_following_information_on_the_form(String,String,String,String)"
});
formatter.result({
  "duration": 2145722382,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_submit_the_form()"
});
formatter.result({
  "duration": 72954240,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 96151152,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_see_an_error_message(ContactUs.java:140)\n\tat ✽.Then I should see an error message(features/contactus.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1259564818,
  "status": "passed"
});
formatter.before({
  "duration": 1372102448,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I omit one of the following information on the form \"j.Bloggs\" \"j.Bloggs@qaworks.com\" \"\" \"please contact me I want to find out more\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 6982834560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.Bloggs",
      "offset": 53
    },
    {
      "val": "j.Bloggs@qaworks.com",
      "offset": 64
    },
    {
      "val": "",
      "offset": 87
    },
    {
      "val": "please contact me I want to find out more",
      "offset": 90
    }
  ],
  "location": "ContactUs.i_omit_one_of_the_following_information_on_the_form(String,String,String,String)"
});
formatter.result({
  "duration": 2311313032,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_submit_the_form()"
});
formatter.result({
  "duration": 73134379,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 91780183,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_see_an_error_message(ContactUs.java:140)\n\tat ✽.Then I should see an error message(features/contactus.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1285036916,
  "status": "passed"
});
formatter.before({
  "duration": 1364814375,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I omit one of the following information on the form \"j.Bloggs\" \"j.Bloggs@qaworks.com\" \"test automation\" \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 7134388578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.Bloggs",
      "offset": 53
    },
    {
      "val": "j.Bloggs@qaworks.com",
      "offset": 64
    },
    {
      "val": "test automation",
      "offset": 87
    },
    {
      "val": "",
      "offset": 105
    }
  ],
  "location": "ContactUs.i_omit_one_of_the_following_information_on_the_form(String,String,String,String)"
});
formatter.result({
  "duration": 1679310284,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_submit_the_form()"
});
formatter.result({
  "duration": 68123356,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 153152771,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepsdefinition.ContactUs.i_should_see_an_error_message(ContactUs.java:140)\n\tat ✽.Then I should see an error message(features/contactus.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1280081159,
  "status": "passed"
});
});