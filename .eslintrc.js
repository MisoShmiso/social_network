module.exports = {
  extends: ["react-app", "airbnb"],
  rules: {
    "no-unused-vars": "warn", // Предупреждение о неиспользуемых переменных
    indent: ["error", "tab", { tabWidth: 2 }], // Отступы — 2 таба
    quotes: ["error", "single"], // Одиночные кавычки
    "linebreak-style": ["error", "unix"], // LF для концов строк
    "react/jsx-indent": ["error", "tab"], // Отступы в JSX — табы
    "react/jsx-indent-props": ["error", "tab"], // Отступы в пропсах JSX — табы
  },
};
