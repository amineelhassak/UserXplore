import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const userData = await req.json();
    const newUser = await prisma.user.create({ data: userData });
    // newUser.disable = true;
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error during user creation:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
};
