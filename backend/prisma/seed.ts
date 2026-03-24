import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);
  const adminPassword = await bcrypt.hash('admin123', 10);

  // Upsert Categories
  const multiRotor = await prisma.category.upsert({
    where: { name: 'Multi-Rotor' },
    update: {},
    create: { name: 'Multi-Rotor' },
  });

  const fixedWing = await prisma.category.upsert({
    where: { name: 'Fixed-Wing' },
    update: {},
    create: { name: 'Fixed-Wing' },
  });

  // Upsert Admin
  await prisma.user.upsert({
    where: { email: 'admin@drolympics.com' },
    update: { password: adminPassword },
    create: {
      email: 'admin@drolympics.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Upsert Team 1 (Nexus Speed)
  await prisma.user.upsert({
    where: { email: 'pilot@nexus.com' },
    update: { password },
    create: {
      email: 'pilot@nexus.com',
      password: password,
      role: 'TEAM',
      team: {
        create: {
          name: 'Nexus Speed',
          captainName: 'Sarah Connor',
          categoryId: multiRotor.id,
          score: 1200,
          pilots: {
            create: [
              { name: 'Sarah Connor', role: 'Lead Pilot' },
              { name: 'Kyle Reese', role: 'Spotter' },
            ],
          },
        },
      },
    },
  });

  // Upsert Team 2 (Sky Predators)
  await prisma.user.upsert({
    where: { email: 'test@flyers.com' },
    update: { password },
    create: {
      email: 'test@flyers.com',
      password: password,
      role: 'TEAM',
      team: {
        create: {
          name: 'Test Flyers',
          captainName: 'John Doe',
          categoryId: fixedWing.id,
          score: 850,
          pilots: {
            create: [
              { name: 'John Doe', role: 'Lead Pilot' },
            ],
          },
        },
      },
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
