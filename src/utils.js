function processMembers(members) {
  const validMembers = [];

  if (!Array.isArray(members)) {
    console.error('Invalid members data: Expected an array');
    return validMembers;
  }

  members.forEach(member => {
    if (!member.name || !member.bio) {
      console.warn(`Skipping invalid member: ${JSON.stringify(member)}`);
      return;
    }
    // Convert member fields (string) into an array of strings, splitting by comma, fullstop, apostrophe or space
    if (typeof member.bio === 'string') {
      member.bioWords = member.bio.split(/[\s,.']+/).map(item => item.trim().toLowerCase()).filter(item => item.length > 1);
    }
    validMembers.push(member);
  });

  return validMembers;
}

function processJobs(jobs) {
  const validJobs = [];

  if (!Array.isArray(jobs)) {
    console.error('Invalid jobs data: Expected an array');
    return validJobs;
  }
  
  jobs.forEach(job => {
    if (!job.title || !job.location) {
      console.warn(`Skipping invalid job: ${JSON.stringify(job)}`);
      return;
    }
    // Convert job fields (string) into an array of strings, splitting by comma, fullstop, apostrophe or space
    if (typeof job.title === 'string') {
      job.titleWords = job.title.split(/[\s,.']+/).map(item => item.trim().toLowerCase()).filter(item => item.length > 1);
    }

    if (typeof job.location === 'string') {
      job.locationWords = job.location.split(/[\s,']+/).map(item => item.trim().toLowerCase()).filter(item => item.length > 1);
    }

    validJobs.push(job);
  });

  return validJobs;
}

module.exports = { processMembers, processJobs };
