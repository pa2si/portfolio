import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview> New message from your Portfolio site </Preview>
        <Body className="bg-gray-100 text-black">
          <Container className="py-10">
            <Section className="bg-white px-10 shadow-lg rounded-md">
              <Heading className="leading-tight text-fuchsia-900">
                You received the following message from the contact form
              </Heading>
              <Text className="text-gray-800 text-lg">{message}</Text>
              <Hr />
              <Text className="text-gray-600">
                The senders email is: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
