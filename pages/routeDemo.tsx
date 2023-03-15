import Link from 'next/link'
import React from 'react'


export default function RouteDemo() { 
   return (
       <>
           <ol className="ml-8 mt-8 flex flex-col list-inside list-decimal">
                <li className='hover:bg-gray-300 '>
                   <Link href="/blog/hello">
                        Nested link: pages/blog/hello 
                    </Link>
               </li>

               <li className='hover:bg-gray-300 '>
                    <Link href={`/blog/foo`}>
                            Route params: pages/blog/foo 
                    </Link>
               </li>

               <li className='hover:bg-gray-300 '>
                    <Link href="/blog/abc?foo=bar&bas=ball">
                        Route params: /blog/abc?foo=bar
                    </Link>
               </li>

               <li className='hover:bg-gray-300 '>
                   <Link href="/blog/abc/a-comment">
                       Go to pages/posts/[pid]/[comment].tsx
                   </Link>
               </li>

               <li className='hover:bg-gray-300 '>
                   <Link href="/posts/abc/b-comment" >
                       Go to pages/posts/[pid]/[...slug].tsx
                   </Link>
               </li>
               <li className='hover:bg-gray-300 '>
                   <Link href="/posts/asfdasdfas/c-comment/dalkfhlsa/sadlkfjaslk;dfj;las/asdklfjsal;kjdf;as">
                       Go to pages/posts/[pid]/[...slug].tsx
                   </Link>
               </li>
               <li className='hover:bg-gray-300 hover:text-xl'>
                   <Link href="/posts/pushRoute">
                       Go to pages/posts/pushRoute.tsx
                   </Link>
               </li>
               <li className='hover:bg-gray-300 hover:text-xl'>
                   <Link href="/toastDemo">
                       Go to pages/toastDemo.tsx
                   </Link>
               </li>



           </ol>
       </>
   )
}

