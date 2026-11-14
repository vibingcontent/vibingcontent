import { MediaLayoutComponent } from '@gitroom/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';
import { BRAND_NAME } from '@gitroom/helpers/utils/brand';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Media`,
  description: '',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
