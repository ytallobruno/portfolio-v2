import { useState, useEffect } from 'react';
import { fetchGitHubUser, type GitHubUser } from '@/services/github';

interface UseGitHubUserReturn {
  user: GitHubUser | null;
  loading: boolean;
  error: Error | null;
}

export function useGitHubUser(username?: string): UseGitHubUserReturn {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchGitHubUser(username);

        if (isMounted) {
          setUser(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch user'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { user, loading, error };
}
