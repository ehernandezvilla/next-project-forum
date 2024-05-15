'use server';

import {redirect} from 'next/navigation';

export async function navigate(data: FormData){
  const currentURL = new URL(data.get('url') as string || '');

  redirect(currentURL.pathname);
}