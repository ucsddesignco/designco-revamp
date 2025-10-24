import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (token !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { revalidated: false, message: 'Invalid token' },
        { status: 401 }
      );
    }

    revalidatePath('/about');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { revalidated: false, message: 'Error' + err },
      { status: 500 }
    );
  }
}
