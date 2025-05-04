const MEMBERS_URL = 'https://bn-hiring-challenge.fly.dev/members.json';
const JOBS_URL = 'https://bn-hiring-challenge.fly.dev/jobs.json';

async function fetchMembers() {
  const res = await fetch(MEMBERS_URL);
  if (!res.ok) throw new Error('Failed to fetch members');
  return res.json();
}

async function fetchJobs() {
  const res = await fetch(JOBS_URL);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
}

module.exports = { fetchMembers, fetchJobs };
