'use server'

import { cookies } from 'next/headers';

async function createCookie(name: string, value: any) {
    cookies().set(name, value)
}

async function getCookie(name: string) {
    const value = cookies().get(name);
    return value;
}

export { createCookie, getCookie }