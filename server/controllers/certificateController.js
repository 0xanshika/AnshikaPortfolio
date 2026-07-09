import Certificate from "../models/Certificate.js";

export const getCertificates = async (req, res) => {
  res.json(await Certificate.find().sort({ issueDate: -1 }));
};

export const createCertificate = async (req, res) => {
  res.status(201).json(await Certificate.create(req.body));
};

export const updateCertificate = async (req, res) => {
  res.json(await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteCertificate = async (req, res) => {
  await Certificate.findByIdAndDelete(req.params.id);
  res.json({ message: "Certificate deleted" });
};