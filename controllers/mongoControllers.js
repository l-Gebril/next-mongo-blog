import mongoose from 'mongoose';
mongoose
  .connect("mongodb+srv://projects:projects@projects.z0byezk.mongodb.net/travel-blog?retryWrites=true&w=majority")
  .then(() => console.log("Database is Connected Successfully!"))
  .catch(() => console.log("Error in Connecting to Database"))

export async function findDocs(collection) {
  try {
    const result = await collection.find({}).sort({ createdAt: -1 });
    return { docs: result };
  } catch (err) {
    return { errors: err.message };
  }
}
export async function findDoc(collection, doc) {
  try {
    const result = await collection.findById(doc);
    return { doc: result };
  } catch (err) {
    return { errors: err.message };
  }
}
// POST
export async function createDoc(collection, doc) {
  try {
    const result = await collection.create(doc);
    return {
      message: result
    };
  } catch (err) {
    return { errors: err.message };
  }
}

export async function updateDoc(collection, id, doc) {
  try {
    const result = await collection.findByIdAndUpdate(id, doc, {
      upsert: true,
      new: true,
    });

    return {
      message: result? 'Updated Successfully': 'Error, Try again later.',
    };
  } catch (err) {
    return { errors: err.message };
  }
}

// DELETE
export async function deleteDocs(collection) {
  try {
    const result = await collection.deleteMany({});

    return {
      message: result? `${result.deletedCount} Doc(s) was/were Deleted Successfully`: 'Error, Try again later.',
    };
  } catch (err) {
    return { errors: err.message };
  }
}

export async function deleteDoc(collection, id) {
  try {
    const result = await collection.findByIdAndDelete(id);

    return {
      message: result? 'Deleted Successfully': 'Error, Try again later.',
    };
  } catch (err) {
    return { errors: err.message };
  }
}
