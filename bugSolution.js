```javascript
// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image src="/images/test.jpg" width={500} height={300} alt="test image" />
    </div>
  );
}

// app/page.js (or adjust path as needed)
export default function Page() {
  return (
    <div>App directory default page</div>
  );
}
```