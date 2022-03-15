import db from './SQLiteDatabase';

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS bars (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO bars (code) values (?);",
        [obj.code],

        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); //insert falhou
        },
        (_, error) => reject(error)
      );
    });
  });
};

const all = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx)=>{
      tx.executeSql(
        "SELECT * FROM bars;",
        [],
        (_, { code: { _array } }) => setItems(_array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE code SET code=? WHERE id=?;"
        [obj.code, id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); //nenhum registro alterado
        },
        (_, error) => reject(error)
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM bars WHERE id=?;",
        [id],

        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error)
      );
    });
  });
};

export default {
  create,
  all,
  update,
  remove,
};