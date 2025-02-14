import {Page} from '@shopify/polaris';

export default function TestLayout({ children }) {
  return (
    <div className="border border-red-500 h-[100vh] w-[100vw]">
      <Page fullWidth title="test layout">
        {children}
      </Page>
    </div>
  );
}
