$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Us Page",
  "description": "As an end user\nI want a contact us page\nSo that I can find out more about QAWorks exciting services!!",
  "id": "contact-us-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#  Scenario Outline: Valid Submission"
    },
    {
      "line": 7,
      "value": "#    Given I am on the QAWorks Site"
    },
    {
      "line": 8,
      "value": "#    Then I should be able to contact QAWorks with the following information \"\u003cname\u003e\" \"\u003cemail\u003e\" \"\u003csubject\u003e\" \"\u003cmessage\u003e\""
    },
    {
      "line": 9,
      "value": "#"
    },
    {
      "line": 10,
      "value": "#    Examples:"
    },
    {
      "line": 11,
      "value": "#      | name      | email      | subject   | message                |"
    },
    {
      "line": 12,
      "value": "#      | j.Bloggs      | j.Bloggs@qaworks.com      | test automation   | please contact me I want to find out more   |"
    }
  ],
  "line": 15,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I omit one of the following information on the form \"\u003cname\u003e\" \"\u003cemail\u003e\" \"\u003csubject\u003e\" \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
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
      "line": 22,
      "id": "contact-us-page;incomplete-form-submission;;1"
    },
    {
      "cells": [
        "",
        "j.Bloggs@qaworks.com",
        "test automation",
        "please contact me I want to find out more"
      ],
      "line": 23,
      "id": "contact-us-page;incomplete-form-submission;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2512540023,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Incomplete form submission",
  "description": "",
  "id": "contact-us-page;incomplete-form-submission;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I am on the QAWorks Site",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
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
  "line": 18,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs.i_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 7420976049,
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
  "duration": 2092625878,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_submit_the_form()"
});
formatter.result({
  "duration": 67934120,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 331214714,
  "status": "passed"
});
formatter.after({
  "duration": 598552746,
  "status": "passed"
});
});