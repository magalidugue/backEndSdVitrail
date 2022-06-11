const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllVisits = async (_req, res) => {
  try {
    const allVisits = await prisma.visits.findMany();
    res.status(200).json(allVisits);
    return allVisits;
  } catch (err) {
    return res.status(404).json();
  }
};

const addingVistors = async (req, res) => {
  const { visit_id } = req.body;
  const { visitors_id } = req.body;
  const { session_id } = req.body;
  //try {
  await prisma.visits_visitors.create({
    data: {
      visit_id: visit_id,
      visitors_id: visitors_id,
      session_id: session_id,
    },
  });
  res.status(200).json();
  //} catch (err) {
  //return err;
  //}
};

const createVisit = async (req, res) => {
  const { title } = req.body;
  const { littledescription } = req.body;
  const { bigdescription } = req.body;
  const { imageurl } = req.body;
  try {
    const newVisit = await prisma.visits.create({
      data: {
        title: title,
        littledescription: littledescription,
        bigdescription: bigdescription,
        imageurl: imageurl,
      },
    });
    res.status(200).json();
    return newVisit;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllVisits,
  addingVistors,
  createVisit,
};
