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
  "duration": 2575177251,
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
  "duration": 7101328877,
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
  "duration": 2438712270,
  "status": "passed"
});
formatter.after({
  "duration": 1010921,
  "status": "passed"
});
});