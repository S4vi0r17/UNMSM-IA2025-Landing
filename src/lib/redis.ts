import Redis from 'ioredis';

const getRedisClient = () => {
  const client = new Redis({
    host: process.env.REDIS_HOST!,
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD,
    // Importante en Next.js para reconexiones
    maxRetriesPerRequest: 3,
    lazyConnect: true,
  });

  client.on('error', (err) => console.error('Redis error:', err));

  return client;
};

// Singleton para evitar múltiples conexiones en desarrollo (hot reload)
declare global {
  var redis: Redis | undefined;
}

const redis = globalThis.redis ?? getRedisClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.redis = redis;
}

export default redis;
