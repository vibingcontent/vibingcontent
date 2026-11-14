import { BRAND_NAME } from '@gitroom/helpers/utils/brand';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: `${BRAND_NAME} - Agent`,
  description: '',
};

export default async function Page() {
  return redirect('/agents/new');
}
