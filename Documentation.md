## Installation:

```
npm install 
```

It will resolve the required dependencies from the package.json file.

## Running Test:

Run all test:

```
npx cypress run 
```

Run with html report:

```
npm run cypress_report
```

Run with a specific test or spec:

```
npx cypress run --spec cypress/e2e/buySomeProducts.spec.ts
```

#### html report:

report could be found on mochawesome-report folder

## Framework Explanation

This Frameworks uses PageObject pattern with a extra layer called steps for a more organized page objects and specs

#### Page Object Model Pattern

The Page Object Model (POM) is a testing design pattern. It is applied to improve the effectiveness automated software
tests. The main focus is on building a representation of the UI components and features. These representations are
included within classes referred to as "page objects."

Each page object is associated with a particular application page or component. It organizes web page elements like
buttons and forms into classes. So it makes tests easier to write and maintain. Changes to the website won't confuse
your tests because POM keeps things neat and clear.

#### Benefits of Page Object Model:

***Easy management:***
It maintains order as it keeps the testing code apart from the specifics of the website or application.

***Less repetition:***
You can avoid repeatedly writing the same testing procedures when using POM.

***Quick fixes:***
POM streamlines the process of fixing the testing code when a website or app is updated

***Reduced errors***
One of the major benefits of Page Object Model is also that it lessens the probability of errors

***Improved maintenance***
Simplifies updates and modifications. You only need to make one adjustment whenever a button moves or the page layout
changes.

#### Benefits of Steps layer:

***More Readable test***
Simplifies the elements interaction with just one function or method

***Improve Organization***
Separates the heavy interactions on elements, looping, filtering

## Future-proofing

Any further change and functionality for each new page a new page class must be created under page-objects folder and
consecutive the corresponding the step class that will contain all heavy duty interacting and the specific spec file
under the e2e folder
