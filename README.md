qaworkstestautomation

REQUIREMENTS
============
1.) Java (version 8)
2.) Maven (version 3+). For installation and configuration instructions see https://maven.apache.org/install.html for
    installation instructions for your platform
3.) Chromedriver executable (version 2.33). Download from http://chromedriver.storage.googleapis.com/index.html, and
    into your home drive.

4.) An IDE (prefrrably IntelliJ IDE)
PLATFROM LIMITATIONS
====================
This test will not run on Windows OS systems.

DEPENDENCIES
============
See pom.xml in ContactUsTestAutomation directory for all dependencies

INSTRUCTIONS TO BUILD AND RUN
=============================
In IntelliJ:
1.) Check out code
2.) Run > Edit Configurations
3.) Under Junit, select RunCukesTest. Click OK.
4.) Click on RunCukesTest run configuration

From Command Line:
1.) Open the command line terminal.
2.) Go into the directory ContactUsTestAutomation
3.) Issue mvn test

BUGS FOUND
==========
1.) Error message on form when valid details are submitted
