import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lwzae6ow',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skfMGTmwjBa1Unfqjigd4mrQ60j9F1IbU46Jq6tZfC8OSIWcLQkHs5egvB3ajEGljC8JxjiwZvH2Tg0GAg71C85bo5PJtiBjLaB4EjHLdQTkNnzgqvTnXetQ6CoDvKQ9yCg8zcB6G440L5QN8Ychi7eBbgM22GpKNA0WSd3Vt2U8FqwGblEM',
  useCdn: false,
})