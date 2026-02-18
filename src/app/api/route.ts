import { NextResponse } from 'next/server';
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST!,
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,
});

export async function GET() {
  try {
    // Incrementar el contador usando Upstash Redis
    const counter = await redis.incr('visitCounter');

    // Devolver el valor actual
    return NextResponse.json({ count: counter });
  } catch (error) {
    console.error('Error al manejar el contador:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
