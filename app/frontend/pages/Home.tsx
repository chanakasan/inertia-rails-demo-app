import {Page, Card} from '@shopify/polaris';
import { Link } from '@inertiajs/react'

export default function PageExample() {
  return (
    <Page
      fullWidth
      title="Home"
    >
      <Card>
        <h1 className="tex-4xl">Home</h1>
        <hr className="mb-4"/>
        <div className="flex flex-col">
          <Link href="/notes">Notes</Link>
          <Link href="/pages/test">Test</Link>
        </div>
      </Card>
    </Page>
  );
}
