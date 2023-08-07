const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  shop: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: false },
});

const Storeuser = mongoose.model("Active_user", StoreSchema);

module.exports = Storeuser;
