import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Configurar Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
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
