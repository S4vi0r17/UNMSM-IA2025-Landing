import { useEffect, useState } from 'react';

export function useVisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api', {
          next: { revalidate: 259200 }, // Revalidate every 3 days
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to random count if API fails
        setCount(Math.floor(Math.random() * 900) + 1100);
      }
    };

    fetchVisitorCount();
  }, []);

  return count;
}
