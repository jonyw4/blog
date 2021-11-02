# Testing in Front End

<!-- TODO: Make a conclusion -->
<!-- TODO: Review it -->
<!-- TODO: Make a diagram -->
<!-- TODO: Make a table in the end -->

In the long of my life, I notice that my colegues struggles to make test in front end. Sometimes is about not familiar with tests, sometimes is about the framework, and sometimes is to know what I need to cover. Some books even describe as hard to do, saying that you probably don't want to do that.
But we are in 2021, and we have a lot of tools to make good test of an UI in front end. So this article, hopefully, will cover some common types of testing, some overall view of this types and also some example of tools.

## Types

Define tests types can be fuzzy and difficult because sometimes we don't have a good separation in the code. So this types that I am presenting here is based on **common problems** that we want to solve in developing UI and front-end (specially web applications). But probably **you don't need to have it all**, you always need to identify what them you need before putting into your project. So let's start with the most common types.

Nowadays is common to use a component approach, so usually we start creating components that have tiny pieces of our layout and them we stitch together to create a whole page. Using that as principle we can have some levels of testing. 

### Component Level
Testing that we are going to use in the components code. Ideally our components is decoupled from the rest of the code. So we can test it independently, to work with whatever input. 

#### Snapshots Test
We usually are not using raw HTML to create our code, React, Vue and Angular come to rescue. The first test that we probably want to have in our codebase is snapshot testing. With that test we can assure that the component made in React for example is rendering the same output in HTML as should be in the browser. 
Tools: jest-snapshot, testing-library

#### Interaction Test
Web applications is made by interactions, and our components usually have methods that can be called by the interaction with the user. So if a user click in a button and opens a dropdown, we probably want to test if that interactions is working as expected and open the dropdown correctly.

Tools: testing-library

#### Visual Regression
The UI is made by pixels. We also want to make sure that the UI is the same as the previous version. With visual regression test we take a screenshot of the component inside a screen and compare it with the previous version to make sure that is working as expected. Sometimes can be tricky, like with animations, with different OS, different browsers, different screen resolutions, etc, but usually it is a good idea to have it in your codebase.

Tools: storybook with chromium, storybook with loki, cypress, playwright)

### Application Level 
In the application level we can have tests that are related to the whole application. We can use the term integration test to describe these tests by building the entire application, serve and try to execute some main happy scenarios mocking external services. You can do that easily with Jest, Cypress, Playwright, etc.

### User Perspective Level
This is a more high level scenario test, you can see this as feature test or end to end test by testing our application in by using the application in a real scenario. You can do it with the same tools from the application level. 


Testing that we are going to use in the components code. Ideally our components is decoupled from the rest of the code. So we can test it independently, to work with whatever input. 

#### Snapshots Test
We usually are not using raw HTML to create our code, React, Vue and Angular come to rescue. The first test that we probably want to have in our codebase is snapshot testing. With that test we can assure that the component made in React for example is rendering the same output in HTML as should be in the browser. 
Tools: jest-snapshot, testing-library

#### Interaction Test
Web applications is made by interactions, and our components usually have methods that can be called by the interaction with the user. So if a user click in a button and opens a dropdown, we probably want to test if that interactions is working as expected and open the dropdown correctly.

Tools: testing-library

#### Visual Regression
The UI is made by pixels. We also want to make sure that the UI is the same as the previous version. With visual regression test we take a screenshot of the component inside a screen and compare it with the previous version to make sure that is working as expected. Sometimes can be tricky, like with animations, with different OS, different browsers, different screen resolutions, etc, but usually it is a good idea to have it in your codebase.

Tools: storybook with chromium, storybook with loki, cypress, playwright

### Application Level 
In the application level we can have tests that are related to the whole application. We can use the term integration test to describe these tests by building the entire application, serve and try to execute some main happy scenarios mocking external services. You can do that easily with Jest, Cypress, Playwright, etc.

### User Perspective Level
This is a more high level scenario test, you can see this as feature test or end to end test by testing our application in by using the application in a real scenario. You can do it with the same tools from the application level.