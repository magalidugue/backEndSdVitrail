const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllVisitors = async (_req, res) => {
  try {
    const allVisitors = await prisma.visitors.findMany();
    res.status(200).json(allVisitors);
    return allVisitors;
  } catch (err) {
    return res.status(404).json();
  }
};

const createVisitor = async (req, res) => {
  const { name } = req.body;
  const { firstname } = req.body;
  const { email } = req.body;
  const { phone } = req.body;
  try {
    const newVisitor = await prisma.visitors.create({
      data: {
        name: name,
        firstname: firstname,
        email: email,
        phone: phone,
      },
    });
    res.status(200).json();
    return newVisitor;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllVisitors,
  createVisitor,
};
