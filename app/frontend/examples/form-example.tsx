import {Form, FormLayout, Checkbox, TextField, Button, Page} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function FormOnSubmitExample() {
  const [newsletter, setNewsletter] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(() => {
    setEmail('');
    setNewsletter(false);
  }, []);

  const handleNewsLetterChange = useCallback(
    (value: boolean) => setNewsletter(value),
    [],
  );

  const handleEmailChange = useCallback((value: string) => setEmail(value), []);

  return (
    <Page
    fullWidth
    title="Home"
  >
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Checkbox
            label="Sign up for the Polaris newsletter"
            checked={newsletter}
            onChange={handleNewsLetterChange}
          />

          <TextField
            value={email}
            onChange={handleEmailChange}
            label="Email"
            type="email"
            autoComplete="email"
            helpText={
              <span>
                We’ll use this email address to inform you on future changes to
                Polaris.
              </span>
            }
          />

          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
    </Page>
  );
}
