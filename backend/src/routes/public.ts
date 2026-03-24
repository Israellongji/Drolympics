import { Router } from 'express';
import { prisma } from '../server';

const router = Router();

router.get('/standings', async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      orderBy: { score: 'desc' },
      include: { category: true }
    });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/news', async (req, res) => {
  try {
    const news = await prisma.news.findMany({ orderBy: { date: 'desc' } });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/vault', async (req, res) => {
  try {
    const vault = await prisma.vaultItem.findMany({ orderBy: { date: 'desc' } });
    res.json(vault);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/rules', async (req, res) => {
  try {
    const rules = await prisma.rule.findMany();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
