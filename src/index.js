const { fetchMembers, fetchJobs } = require('./fetchData');
const { recommendFuzzyJobs, recommendPerfectJobs } = require('./matcher');
const { processMembers, processJobs } = require('./utils');

function findRecommendations(members, jobs) {
  const validMembers = processMembers(members);
  if (validMembers.length === 0) {
    console.log('No valid members found.');
    return;
  }
  const validJobs = processJobs(jobs);
  if (validJobs.length === 0) {
    console.log('No valid jobs found.');
    return;
  }

  validMembers.forEach(member => {
    const perfectRecommendations = recommendPerfectJobs(member, validJobs);
    console.log(`${member.name}:`);
    console.debug(`(Bio: ${member.bio})`);
    if (perfectRecommendations.length > 0) {
      perfectRecommendations.forEach(job => {
        console.log(`  - ${job.title} in ${job.location}`);
      });
    } else {
      const fuzzyRecommendations = recommendFuzzyJobs(member, validJobs);
      if (fuzzyRecommendations.length > 0) {
        console.debug('  No perfect matches found. Finding jobs matching partially...');
        fuzzyRecommendations.forEach(job => {
          console.log(`  - ${job.title} in ${job.location}`);
        });
      } else {
        console.log('  No jobs found.');
      }
    }
  });
}

async function main() {
  try {
    const members = await fetchMembers();
    const jobs = await fetchJobs();

    findRecommendations(members, jobs);
    
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
