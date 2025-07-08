// app/page.tsx
import { redirect } from 'next/navigation';

export default function Page() {
    redirect('/home'); // Instantly redirects to /home
    return null; // Optional: you can return null since the page will not render
}
