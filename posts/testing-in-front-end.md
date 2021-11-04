---
title: Testing in Front End
createdAt: '2021-11-03T02:11:11.781Z'
updatedAt: '2021-11-03T02:11:11.781Z'
tags:
  - front-end
  - testing
---

In the long of my coding experience, I notice that some colleagues struggle to make test in front end. Sometimes is about not being familiar with tests, sometimes is about the details of a specific framework, and sometimes is to know what should be covered. Some books even describe it as hard to do, saying that you probably don't want to do that. But we are in 2021, and we have a lot of tools to make good test of a UI in front end.

So this article, will cover some common types of testing, some overall view of these types and also some example of tools that you can use.

First things first. This article is for front end developers how know the basics of testing and have some basic experiences in that. If you don't know anything about this subject, this article is not for you. Take some time to learn about the principles of testing and go practice first.

Let's go!

## Types
Define tests types can be fuzzy and difficult because sometimes we don't have a good separation in the code. So this types that I am presenting here is based on **common problems** that we want to solve in developing UI and front-end (specially web applications). But probably **you don't need to have it all** in your codebase, you always need to identify what are them you need before putting into your project.

## Levels
Nowadays, it is common to use a component approach, so usually we start creating components that have tiny pieces of our layout, and then we stitch together to create a whole page. Using that as a principle we can have some levels of testing.

That being said, let's start with the most common levels and types

### Component Level
In this level we test what we are going to use in the components code. Ideally our components are decoupled from the rest of the code. So we can test it independently, to work with whatever input.

#### Snapshots Test
We are usually not using raw HTML to create our code, React, Vue and Angular come to rescue. The first test that we probably want to have in our codebase is snapshot testing. With that test we can assure that the component made in React for example is rendering the same output in HTML as should be in the browser.

Usually test frameworks of these frameworks have a way to render the actual HTML, and then you can save it using a snapshot tool.

Example: testing-library with jest snapshot

#### Interaction Test
Web applications are made by interactions, and our components usually have methods that can be called by the interaction with the user. So if a user click in a button and opens a dropdown, we want to test if that interactions is working as expected and open the dropdown correctly. Usually the frameworks have a way to test that too.

Example: testing-library

#### Visual Regression
The UI is made by pixels. We also want to make sure that the UI is the same as the previous version. With visual regression test we take a screenshot of the component inside a screen and compare it with the previous version to make sure that is working as expected. Sometimes can be tricky, like with animations, with different OS, different browsers, different screen resolutions, etc. but usually it is a good idea to have it in your codebase in some level.

To make that test you need to put your component in a real browser and take a screenshot of it. So you probably need something emulating the component in browser and also a good tool to emulate a browser and take the screenshot.

Tools: Cypress component testing, StoryBook with Chromium, Storybook with Loki, Playwright

### Application Level
#### Functional Test
Classic functional testing, you can use to test functions, helpers, data layer and so on.

Tools: Jest

#### Integration Test
We can use the term integration test to describe these tests by building the entire application, serve and try to execute some main happy scenarios mocking external services. You can do that easily with some testing tools like Cypress, Playwright, etc.

### User Perspective Level
#### End-to-End Test
This is a more high-level scenario test, you can see this as feature test or end-to-end test by testing our application in by using the application in a real scenario. You can do it with the same tools from the application level.

# Conclusion
I hope by knowing some different types of testing and levels of testing may help you to make good decisions of what tests do you need in your codebase. Although, which and how is up to you and your team. Just not forget to test, your future self will thank you.

# References
Some references and further study about testing and front end architecture. Make a good use:

[ARTICLE: Practical Test Pyramid by *Martin Fowler*](https://martinfowler.com/articles/practical-test-pyramid.html)
[ARTICLE: Unit test by *Martin Fowler*](https://martinfowler.com/bliki/UnitTest.html)
[ARTICLE: Gherkin Language by *Cucumber*](https://cucumber.io/docs/gherkin/)
[ARTICLE: Atomic Design by *Brad Frost*](https://bradfrost.com/blog/post/atomic-web-design/)
[BOOK: Clean Code by *Martin Robert C.*](https://www.amazon.com.br/dp/B001GSTOAM/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)