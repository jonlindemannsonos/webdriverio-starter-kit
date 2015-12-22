# WebdriverIO Starter Kit.

This is a simple project to help you start writing tests against the [WebdriverIO API](http://webdriver.io/api/) using the latest ES2015 syntax.

### Install selenium-standalone

To get started, open up a terminal and install `selenium-standalone`, a simple module for running a local Selenium server.

`npm install -g selenium-standalone`

After it finishes installing, run the following command in your terminal for installing the web drivers for the browsers you use on your operating system.

`selenium-standalone install`

Since the Firefox web driver is probably already installed, this will probably install Chrome for Mac or IE for Windows. If you want to install a specific architecture, you can refer to the [documentation for `selenium-standalone`](https://www.npmjs.com/package/selenium-standalone).

### Install wdio

From the terminal window, install `wdio`, which is our WebdriverIO testrunner.

`npm install -g wdio` 

### Clone this repository

Download the `.zip` file or clone this repository to your computer.

### Install the project dependencies

To install all the dependencies you need to run the project, navigate to the folder you just downloaded or cloned and type the following command in to the terminal.

`npm install`

### Start Selenium

Now, you're going to need a terminal window open all the time, running Selenium. If you close the window, Selenium will shut down.

`selenium-standalone start`

Now, Selenium is ready to use.

### Run the test

There is a starter test for you all ready to go. Open a new terminal window, navigate to the project directory and type `npm test`. 