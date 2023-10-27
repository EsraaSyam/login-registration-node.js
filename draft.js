if (req.body.id) {
    const user = await User.findOne({ id: req.body.id });
    // Continue processing with 'user'
  } else {
    // Handle the case where 'req.body.id' is not defined
  }
  