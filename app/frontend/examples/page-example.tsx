import {Page, Card} from '@shopify/polaris';
import { Link } from '@inertiajs/react'

export default function PageExample() {
  return (
    <Page
      fullWidth
      title="Home"
    >
      <Card>
        <h1>Home</h1>
        <hr/>
        <Link href="/test">Test</Link>
      </Card>
    </Page>
  );
}
