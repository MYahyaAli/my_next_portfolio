const GITHUB_USERNAME = "MYahyaAli";
const REVALIDATE_SECONDS = 60 * 60 * 24; // refresh once a day

// Used only if the GitHub API is unreachable/rate-limited at build/revalidate
// time, so the homepage never shows a broken "0".
const FALLBACK_COMMIT_COUNT = 185;

async function getRepoCommitCount(repoName) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=1`,
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
  if (!res.ok) return 0;

  // GitHub paginates commits; the "last" page number in the Link header
  // equals the total commit count on the default branch when per_page=1.
  const link = res.headers.get("link");
  const lastPageMatch = link && link.match(/[?&]page=(\d+)>;\s*rel="last"/);
  if (lastPageMatch) return parseInt(lastPageMatch[1], 10);

  const commits = await res.json();
  return Array.isArray(commits) ? commits.length : 0;
}

export async function getTotalGithubCommits() {
  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!reposRes.ok) return FALLBACK_COMMIT_COUNT;

    const repos = await reposRes.json();
    if (!Array.isArray(repos)) return FALLBACK_COMMIT_COUNT;

    const ownRepos = repos.filter((repo) => !repo.fork);
    const counts = await Promise.all(
      ownRepos.map((repo) => getRepoCommitCount(repo.name))
    );
    const total = counts.reduce((sum, count) => sum + count, 0);
    return total || FALLBACK_COMMIT_COUNT;
  } catch {
    return FALLBACK_COMMIT_COUNT;
  }
}
