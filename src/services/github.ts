export interface GitHubUser {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'ytallobruno';

export async function fetchGitHubUser(username: string = USERNAME): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      // next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data: GitHubUser = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}
