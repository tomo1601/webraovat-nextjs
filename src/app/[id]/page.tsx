"use client"
import { useQuery } from "@tanstack/react-query";
import { usePathname} from 'next/navigation';
import { checkUrl, getDataByUrl} from "../queryFns/TodosFns";
import Link from "next/link";

export default function Page() {
  const pathname = usePathname()
  const {data, isLoading} = useQuery(["url", pathname]/* queryKey */,()=>checkUrl(pathname.replace('/','')) /* ActionWillExe */,{staleTime: 180000} /* Time to need refetch data */);

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
      content = <div>Trang chi tiết{JSON.stringify(data, null, 2)}</div>;
  }

  return (
    <div>
      {content}
      <Link href={`/Tuyen-thuc-tap-sinh-hanh-chinh-nhan-su-tuyen-dung`}>Tuyen-thuc-tap-sinh-hanh-chinh-nhan-su-tuyen-dung</Link>
      <Link href={`/Thuc-tap-ve-quy-trinh-giay-to-cua-doanh-nghiep-trong-phan-mem-quan-ly-noi-bo`}>Thuc-tap-ve-quy-trinh-giay-to-cua-doanh-nghiep-trong-phan-mem-quan-ly-noi-bo</Link>
    </div>
  );
}
