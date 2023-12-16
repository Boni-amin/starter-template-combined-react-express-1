const tasksModel = require('../Model/tasksModel')

// Create 
exports.createTask = async (req, res) => {
    let reqBody = req.body;
    try {
      const result = await tasksModel.create(reqBody);
        
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(500).json({ message: "filed to create student Data" });
      }
    } catch (er) {
      res.status(500).json({ message: er.message });
    }
  };

