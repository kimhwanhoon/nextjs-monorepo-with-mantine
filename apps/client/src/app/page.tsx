import { Button } from '@repo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Client App</h1>
      <Button color="blue" size="lg">
        Client Button
      </Button>
    </main>
  );
}
