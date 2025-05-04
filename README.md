# Bright Network Hiring Challenge 

## Summary

Fetch the required data from the provided APIs and for each member, print their name and their recommended job(s).

## How to Run

In command prompt, run

node src/index.js

Or simply from Visual Studio Code, open index.js and click in "Run -> Start Debugging"

## Developer Notes

Ran out of time, things to improve:

- I struggled to set up the project at the beginning to use typescript so I set it up with javascript. My background is .Net and I didn't find a quick way of creating a NodeJs project that ran without errors on my personal laptop.
- I would also include some unit testing if I had more time.
- For the matching, I used a "perfect" match, so every word in the job title and job location is included in the members bio. (I was obviously bias after seen the jobs data. This approach wouldn't work if the jobs fields are more wordy like member's bio).
- But the perfect matching is too strict, so if that doesn't return a result, I do a fuzzy match where I check if a job title word, or a job location word matches in the members bio.
Also I do the opposite, if a word in the members bio matches in the job title or job location. 
This is to ensure cases like "Hassan - I'm looking for a design job" work. I.e, "designer" contains the substring "design" but "design" doesn't contain "designer". There is also a minimum word length of 4, I don't want to match words like "in" in "internship"
- However, the matching mechanism is still very rudimental, there are many ways to improve it:
   - The fuzzy matching should consider "score" based on how many words it matches or the number of characters it matches (the longer word match, the better)
   - A list of common words to exclude (prepositions, pronoums, etc)
   - Include logic to interpret "excludes" words ("not in", "excluding", "relocate")
   - A few of other things
     - Consider tags, "Engineering jobs", both in members and jobs
     - A library of synonyms. Example "Wokingham" could include "Berkshire", "South East", "UK", "United Kingdom", "Remote".
