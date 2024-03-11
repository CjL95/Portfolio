import AWS from 'aws-sdk';

const client = new AWS.SecretsManager({
  region: 'us-east-1',
});

export async function getSecret(secretName: string) {
  const { SecretString } = await client.getSecretValue({
    SecretId: 'my-secret',
  }).promise();
  return SecretString;
}