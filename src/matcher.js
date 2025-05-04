function recommendPerfectJobs(member, jobs) {
  const jobsInLocation = jobs.filter(job => {
    return job.locationWords.every(locationWord => member.bioWords.includes(locationWord));
  });
  const jobsWithSimilarTitles = jobsInLocation.filter(job => {
    return job.titleWords.every(word => member.bioWords.includes(word));
  });

  return jobsWithSimilarTitles;
}

function recommendFuzzyJobs(member, jobs) {
  const jobsWithSimilarTitles = jobs.filter(job => {
    return job.titleWords.some(word => member.bioWords.includes(word));
  });

  const jobsInLocation = jobs.filter(job => {
    return job.locationWords.some(word => member.bioWords.includes(word));
  });

  // Check if any of the words in the member's bio are present in either the job title or location (Example: "Design" in "UX Designer")
  // previous lines would check if "Designer" is present in "Design"
  const membersBioMatches = jobs.filter(job => {
    return member.bioWords.some(word => 
      word.length > 3 && job.titleWords.filter(w => w.indexOf(word) !== -1).length > 0);
  });

  // set of elements from the 3 arrays to remove duplicates
  const uniqueJobs = new Set([...jobsWithSimilarTitles, ...jobsInLocation, ...membersBioMatches]);

  // convert set back to array
  return Array.from(uniqueJobs);
}

module.exports = { recommendFuzzyJobs, recommendPerfectJobs };
