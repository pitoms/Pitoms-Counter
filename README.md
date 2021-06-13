# Pitoms-Counter

Pitom Saha: #2 Word Count Challenge  
>A google docs GUI clone with word counting feature. Built fast for the TTP application process.  

## App is deployed here:

[Pitom's Counter](https://pitoms-gdoc-counter.herokuapp.com/)

## Usage
Clone this repo to your local machine, and `npm install` from within the "Pitoms-Counter" directory.
Run `npm start` and a browser tab will open with the web app.

## Requirements

* Node 0.10.x

## Executing program

* Navigate to root directory
* Install dependencies using `npm install`
* Run web server using `npm start`
```
cd Pitoms-counter
npm install
npm start
```

## Approach
1. Define & styling components -> Header, TextArea, CountBox.
2. Solve the word count problem:
  a. Create test cases to understand expected output.
  b. Find correct counts from the real [Google Docs app] https://docs.google.com/document/u/0/ and [CountWordsWorth]http://countwordsworth.com/ .
  c. Understand how the computer sees blocks of text by using a [non-printable character viewer] https://www.soscisurvey.de/tools/view-chars.php .
  

## Future improvements
Adding unit testing on the counter logic would be a great way to speed up development. As of now the counter functionality is not as robust as Google Docs. (Example: My sentence counter simply checks for number of periods, exclamation marks and question marks, regardless of if they occur after a single, or multiple words. )

