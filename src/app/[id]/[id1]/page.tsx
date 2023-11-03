"use client"
import { usePathname} from 'next/navigation';

export default function Page() {
  const pathname = usePathname()
  console.log(pathname)
  let content;

  switch (pathname) {
    case '/home':
      content = <div>Home Page</div>;
      break;
    case '/about':
      content = <div>About Page</div>;
      break;
    case '/contact':
      content = <div>Contact Page</div>;
      break;
    default:
      content = <div>Page Not Found</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
}