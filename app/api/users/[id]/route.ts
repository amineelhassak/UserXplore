import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

export const GET = asyncHandler(async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
});

export const PUT = asyncHandler(async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  const userData = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Exclude the 'id' field from userData to avoid validation error
  const { id: _, ...dataToUpdate } = userData;

  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: dataToUpdate, // Use the modified data object
  });

  return NextResponse.json(updatedUser);
});

export const DELETE = asyncHandler(async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  await prisma.user.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: 'User deleted successfully' });
});
