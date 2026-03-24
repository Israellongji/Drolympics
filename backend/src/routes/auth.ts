import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../server';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

router.post('/register', async (req, res) => {
  try {
    const { name, captainName, engineerName, email, password, category } = req.body;

    if (!name || !captainName || !email || !password || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Find or create category
    let dbCategory = await prisma.category.findUnique({ where: { name: category } });
    if (!dbCategory) {
      dbCategory = await prisma.category.create({ data: { name: category } });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        team: {
          create: {
            name,
            captainName,
            categoryId: dbCategory.id,
            pilots: {
              create: [
                { name: captainName, role: 'Lead Pilot' },
                ...(engineerName ? [{ name: engineerName, role: 'Chief Engineer' }] : [])
              ]
            }
          }
        }
      },
      include: { team: true }
    });

    const token = jwt.sign({ userId: user.id, role: user.role, teamId: user.team?.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ message: 'Registration successful', token, user: { id: user.id, email: user.email, team: user.team } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    const user = await prisma.user.findUnique({ where: { email }, include: { team: true } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role, teamId: user.team?.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ message: 'Login successful', token, user: { id: user.id, email: user.email, role: user.role, team: user.team } });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
