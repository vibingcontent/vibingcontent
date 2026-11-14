export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { Activate } from '@gitroom/frontend/components/auth/activate';
import { BRAND_NAME } from '@gitroom/helpers/utils/brand';
export const metadata: Metadata = {
  title: `${BRAND_NAME} - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <Activate />;
}
