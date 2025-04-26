const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Image required' });
  }

  res.status(200).json({
    message: 'Success',
    imageUrl: req.file.location,
  });
};

module.exports = uploadImage;
