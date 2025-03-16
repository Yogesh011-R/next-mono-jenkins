import { client } from '@repo/db/client';

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      {user?.name} {user?.email} JENKINS SSL TEST
    </div>
  );
}
