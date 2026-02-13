export function createRandomCredential() {
  const unique = Date.now();
  return {
    name: `yair${unique}`,
    //email: `yair${unique}@gmail.com`,
    email: 'yairmoshe12@gmail.com',
    password: 'Password123'
  };
}

export function credentialsForLogin()
{
  return {
     email: 'yairslo7@gmail.com',
     password: '123456'
  }
} 