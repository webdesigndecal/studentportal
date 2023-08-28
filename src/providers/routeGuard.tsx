"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useUserContext } from './userContext';
import { set } from 'firebase/database';


function RouteGuard({ children }: { children: any }) {
    const router = useRouter();
    const path = usePathname();
    const [authorized, setAuthorized] = useState(false);
    const { user, setUser } = useUserContext();

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(path);

        // on route change start - hide page content by setting authorized to false  

        // on route change complete - run auth check 

        // unsubscribe from events in useEffect return function
        return () => {
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    function authCheck(url: string) {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/', '/login'];
        const path = url.split('?')[0];
        if (!user && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push('/signin');
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}

export { RouteGuard };