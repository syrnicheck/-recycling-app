import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase("mydb.db");

// Создаем таблицы, если они не существуют
const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL
      )`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS trash_items (
        id INTEGER PRIMARY KEY NOT NULL,
        category_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS recycling_centers (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        address TEXT NOT NULL,
        items_accepted TEXT NOT NULL
      )`
    );
  });
};

// Функция для вставки категорий
const insertCategories = async () => {
  const jsonFileUri = FileSystem.documentDirectory + "categories.json";
  const categoriesString = await FileSystem.readAsStringAsync(jsonFileUri);
  const categories = JSON.parse(categoriesString);
  db.transaction((tx) => {
    categories.forEach((category) => {
      tx.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        [category.name],
        () => {},
        (tx, error) => {
          console.log(`Error inserting category ${category.name}: ${error}`);
        }
      );
    });
  });
};

// Функция для вставки мусорных предметов
const insertTrashItems = async () => {
  const jsonFileUri = FileSystem.documentDirectory + "trash_items.json";
  const trashItemsString = await FileSystem.readAsStringAsync(jsonFileUri);
  const trashItems = JSON.parse(trashItemsString);
  db.transaction((tx) => {
    trashItems.forEach((trashItem) => {
      tx.executeSql(
        `INSERT INTO garbage (name, category_id, description, image) VALUES (?, ?, ?, ?)`,
        [
          trashItem.name,
          trashItem.category_id,
          trashItem.description,
          trashItem.image,
        ],
        () => {},
        (tx, error) => {
          console.log(`Error inserting trash item ${trashItem.name}: ${error}`);
        }
      );
    });
  });
};

const insertRecyclingCenters = async () => {
  const jsonFileUri = FileSystem.documentDirectory + "recycling_centers.json";
  const recyclingCentersString = await FileSystem.readAsStringAsync(
    jsonFileUri
  );
  const recyclingCenters = JSON.parse(recyclingCentersString);
  db.transaction((tx) => {
    recyclingCenters.forEach((recyclingCenter) => {
      tx.executeSql(
        `INSERT INTO recycling_points (name, latitude, longitude, address, accepted_items) VALUES (?, ?, ?, ?, ?)`,
        [
          recyclingCenter.name,
          recyclingCenter.latitude,
          recyclingCenter.longitude,
          recyclingCenter.address,
          recyclingCenter.items_accepted,
        ],
        () => {},
        (tx, error) => {
          console.log(
            `Error inserting recycling center ${recyclingCenter.name}: ${error}`
          );
        }
      );
    });
  });
};

// Инициализируем базу данных и заполняем таблицы данными из файлов
export const initDatabase = async () => {
  createTables();
  console.log(categories);
  console.log(recyclingCenters);
  console.log(trashItems);
  await insertCategories();
  await insertTrashItems();
  await insertRecyclingCenters();
};
