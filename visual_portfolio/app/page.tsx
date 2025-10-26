'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-full overflow-hidden">

      <button onClick={() => router.push("/visual")} className="text-blue-600 hover:text-blue-800 underline">
        Visual
      </button>

    </div>

  );
}