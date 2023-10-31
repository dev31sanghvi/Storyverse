const storySchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    // Add more fields as needed
  });
  
  const Story = mongoose.model('Story', storySchema);
  

  app.post('/api/stories', async (req, res) => {
    const storyData = req.body;
  
    try {
      const story = new Story(storyData);
      await story.save();
      res.status(201).json({ message: 'Story created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create the story' });
    }
  });
  