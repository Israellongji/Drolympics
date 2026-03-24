import { Router } from 'express';
import { prisma } from '../server';

const router = Router();

// Retrieve all teams, their pilots and categories
router.get('/teams', async (req, res) => {
  try {
    const teams = await prisma.team.findMany({ include: { category: true, pilots: true } });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a team's score
router.put('/teams/:id/score', async (req, res) => {
  try {
    const { score } = req.body;
    const team = await prisma.team.update({
      where: { id: req.params.id },
      data: { score: Number(score) }
    });
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create News
router.post('/news', async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const news = await prisma.news.create({ data: { title, content, imageUrl } });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete News
router.delete('/news/:id', async (req, res) => {
  try {
    await prisma.news.delete({ where: { id: req.params.id } });
    res.json({ message: 'Deleted news' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create Vault Media
router.post('/vault', async (req, res) => {
  try {
    const { title, type, url } = req.body;
    const vault = await prisma.vaultItem.create({ data: { title, type, url } });
    res.json(vault);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete Vault Media
router.delete('/vault/:id', async (req, res) => {
  try {
    await prisma.vaultItem.delete({ where: { id: req.params.id } });
    res.json({ message: 'Deleted vault item' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
