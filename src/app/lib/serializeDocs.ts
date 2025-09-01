// The string is actually an ObjectId but for simplification, we will use string
type WithId<T> = T & { _id: string };

export function serializeDoc<T extends { _id: string }>(
  doc: T
): WithId<Omit<T, '_id'>> {
  return {
    ...doc,
    _id: doc._id.toString()
  };
}

export function serializeDocs<T extends { _id: string }>(
  docs: T[]
): WithId<Omit<T, '_id'>>[] {
  return docs.map(serializeDoc);
}
