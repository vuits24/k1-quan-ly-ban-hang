export const  GDK_DB_QUERY = {
test: {
  insert: `const kq = await db.test.insertOne({ma:1, ten:'ten 1'}); return kq.insertedCount;`,
  find: `return new Promise((reject, resolve) => {
  db.test.find().toArray((err, rs) => {
  if(err) { reject(err);} else {resolve(rs);}
  });
  })`
}
};
